import React from 'react';
import { useParams } from 'react-router-dom';
import ProblemDetail from '../components/problems/ProblemDetail';

const ProblemDetailPage = () => {
  const { id } = useParams();

  return (
    <div>
      <h1 className="text-2xl font-bold">Problem Details</h1>
      <ProblemDetail problemId={id} />
    </div>
  );
};

export default ProblemDetailPage;
