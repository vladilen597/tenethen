import React from 'react'
import './Message.scss'
import { Link, useParams } from "react-router-dom";
import newRequest from '../../utils/newRequest';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import getCurrentUser from '../../utils/getCurrentUser';

const Message = () => {
  const { id } = useParams()
   const currentUser = getCurrentUser();
  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery({
    queryKey: ["messages"],
    queryFn: () =>
      newRequest.get(`/messages/${id}`).then((res) => {
        return res.data;
      }),
  }); 

    const mutation = useMutation({
      mutationFn: (message) => {
        return newRequest.post(`/messages`, message);
      },
      onSuccess: () => {
        queryClient.invalidateQueries(["messages"]);
      },
    });

    const handleSubmit = (e) => {
      e.preventDefault()
      mutation.mutate({
        conversationId: id,
        desc: e.target[0].value,
      });
      e.target[0].value = ''
    };
  
  return (
    <div className="message">
      <div className="container">
        <span className="breadcrumbs">
          <Link to="/messages">
            Messages
          </Link>
          {" >"} {currentUser.isSeller ? "Buyer" : "Seller"} {">"}
        </span>
        {isLoading ? (
          "Loading..."
        ) : error ? (
          "Something went wrong"
        ) : (
          <div className="messages">
            {data.map((m) => (
              <div
                className={m.userId === currentUser._id ? "item owner" : "item"}
                key={m._id}
              >
                <img
                  src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <p>{m.desc}</p>
              </div>
            ))}
          </div>
        )}
        <hr />
        <form className="write" onSubmit={handleSubmit}>
          <textarea
            placeholder="Write a message..."
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

export default Message