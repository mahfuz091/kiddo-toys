import React from "react";

const Blog = () => {
  return (
    <div className='wrapper'>
      <h2 className='text-center my-11 font-bold text-3xl text-[#00a0d4]'>
        KiddoToys / Blog
      </h2>
      <div className='border p-5 rounded-lg my-2'>
        <h2 className='font-semibold text-xl'>
          <span className='font-bold'>Ques No 1:</span> What is an access token
          and refresh token? How do they work and where should we store them on
          the client-side?
        </h2>
        <p>
          <span className='font-bold'>Ans:</span> An access token and a refresh
          token are both authentication tokens used in the context of security
          and authorization protocols, such as OAuth (Open Authorization) and
          JWT (JSON Web Tokens). An access token is a credential that is issued
          by an authorization server upon successful authentication of a user or
          application. A refresh token is a long-lived credential that is also
          issued by an authorization server alongside the access token. A common
          flow for API authentication is the sending of data to an endpoint that
          verifies a user. Once verification is successful, the API will return
          an access token that you can then use to make requests to other
          endpoints that require authorization. In addition to an access token,
          most APIs also return a refresh token. A secure way to send access
          tokens and refresh tokens back to a client application is through
          HTTP-only cookies, Token Storage in Memory, HTML5 Web Storage, Native
          Mobile App Secure Storage
        </p>
      </div>
      <div className='border p-5 rounded-lg my-2'>
        <h2 className='font-semibold text-xl'>
          <span className='font-bold'>Ques No 2 :</span> Compare SQL and NoSQL
          databases?
        </h2>
        <p>
          <span className='font-bold'>Ans:</span> The Defference between SQL and
          NoSQL databases are:
        </p>

        <li>
          SQL databases are relational and NoSQL databases are non-relational.
        </li>
        <li>
          SQL databases use structured query language (SQL) . NoSQL databases
          have dynamic schemas for unstructured data.
        </li>
        <li>
          SQL databases are vertically scalable, while NoSQL databases are
          horizontally scalable.
        </li>
      </div>
      <div className='border p-5 rounded-lg my-2'>
        <h2 className='font-semibold text-xl'>
          <span className='font-bold'>Ques No 3:</span>What is express js? What
          is Nest JS
        </h2>
        <p>
          <span className='font-bold'>Ans:</span> Express is a node js web
          application framework that provides broad features for building web
          and mobile applications.{" "}
        </p>
        <p>Here are some key features of Express.js:</p>
        <li>Routing</li>
        <li>MiddleWare</li>
        <li>Error Handling</li>
        <li>RESTful Api development</li>
        <p>
          Nest. js is one of the fastest-growing Node. js frameworks for
          building efficient, scalable, and enterprise-grade backend
          applications using Node. js
        </p>
        <p>Here are some key features of NestJS:</p>
        <li>Modular Architecture</li>
        <li>Controllers</li>
        <li>Authentication and Authorization</li>
      </div>
      <div className='border p-5 rounded-lg my-2'>
        <h2 className='font-semibold text-xl'>
          <span className='font-bold'>Ques No 4: </span>What is MongoDB
          aggregate and how does it work
        </h2>
        <p>
          <span className='font-bold'>Ans:</span>Aggregation is a way of
          processing a large number of documents in a collection by means of
          passing them through different stages. The stages make up what is
          known as a pipeline. MongoDB Aggregation goes further though and can
          also perform relational-like joins, reshape documents, create new and
          update existing collections, and so on.
        </p>
        <p className='font-medium'>
          Here is a diagram to typical MongoDB aggregation pipeline.
        </p>
        <p className='font-semibold'>Input-$match-$group-$sort-Output</p>
        <li>
          $match stage - filters those documents we need to work with, those
          that fit our needs
        </li>
        <li>$group stage - does the aggregation job</li>
        <li>
          $sort stage - sorts the resulting documents the way we require
          (ascending or descending)
        </li>
      </div>
    </div>
  );
};

export default Blog;
