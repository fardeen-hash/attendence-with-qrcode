'use client';


import React from 'react'
import { Card, Typography } from "@material-tailwind/react";

import { useEffect, useState } from "react";
import { data } from 'autoprefixer';

const TABLE_HEAD = ["date", "cost","start_time","hours","isCompleted"];
const TABLE_ROWSS = [
  {
    name: "John Michael",
    job: "Manager",
    date: "23/04/18",
  },
  {
    name: "Alexa Liras",
    job: "Developer",
    date: "23/04/18",
  },
  {
    name: "Laurent Perrier",
    job: "Executive",
    date: "19/09/17",
  },
  {
    name: "Michael Levi",
    job: "Developer",
    date: "24/12/08",
  },
  {
    name: "Richard Gran",
    job: "Manager",
    date: "04/10/21",
  },
];
let TABLE_ROWS = [];


const page = ({ params }) => {


  const [allPosts, setAllPosts] = useState([]);


  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/day/${params?.id}`);
      const data = await response.json();
      setAllPosts(data);
      console.log(data.length);
      console.log(allPosts);
      console.log(TABLE_ROWSS);


    };
    fetchPosts();
  },[params.id]);

  return (
  <Card className="h-full w-full overflow-scroll">
    <table className="w-full min-w-max table-auto text-left">
      <thead>
        <tr>
          {TABLE_HEAD.map((head) => (
            <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal leading-none opacity-70"
              >
                {head}
              </Typography>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {allPosts.map(({ _id,userId,employee_name, date, cost,isCompleted,start_time,hours }, index) => (
          <tr key={_id} className="even:bg-blue-gray-50/50">
            <td className="p-4">
              <Typography variant="small" color="blue-gray" className="font-normal">
                {date}
              </Typography>
            </td>
            <td className="p-4">
              <Typography variant="small" color="blue-gray" className="font-normal">
                {cost}
              </Typography>
            </td>
            <td className="p-4">
              <Typography variant="small" color="blue-gray" className="font-normal">
                {start_time}
              </Typography>
            </td>
            <td className="p-4">
              <Typography variant="small" color="blue-gray" className="font-normal">
                {hours}
              </Typography>
            </td>
            <td className="p-4">
              <Typography variant="small" color="blue-gray" className="font-normal">
              {isCompleted? "Completed" : "Not completed"}
              </Typography>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </Card>
  )
}

export default page