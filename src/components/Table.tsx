import { getMasteryScoresByCategory } from "@/utils/stats";
import { IStats, ISubject } from "@/utils/types";
import React from "react";

const columns = [
  "Category",
  "Correct",
  "Wrong",
  "Accuracy",
  "Mastery",
  "Total Questions",
];

interface TableProps {
  stats: IStats;
  subject: ISubject;
}

const Table = ({ stats, subject }: TableProps) => {
  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            {columns && columns.map((column) => <th>{column}</th>)}
          </tr>
        </thead>
        <tbody>
          {stats[subject] &&
            Object.entries(stats[subject].categoryStats).map(
              ([category, { score, time, questionCount }], index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{category}</td>
                  <td>{score}</td>
                  <td>{questionCount - score}</td>
                  <td>
                    {questionCount != 0
                      ? Math.round((score / questionCount) * 100)
                      : 0}
                    %
                  </td>
                  <td>
                    {getMasteryScoresByCategory({ score, time, questionCount })}
                    %
                  </td>
                  <td>{questionCount}</td>
                </tr>
              )
            )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
