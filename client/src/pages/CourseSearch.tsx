
import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface CourseResult {
  subject: string;
  code: string;
  title: string;
  description: string;
}

export const CourseSearch = (): JSX.Element => {
  const [query, setQuery] = useState('');
  const [subjectParam, setSubjectParam] = useState('');
    const [codeParam, setCodeParam] = useState(["1", "2", "3", "4"]);
  const [courseResults, setCourseResults] = useState<CourseResult[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSubjectParamChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSubjectParam(e.target.value);
  };

  const handleCodeParamChange = (value: string) => {
    if (codeParam.includes(value)) {
      setCodeParam(codeParam.filter((item) => item !== value));
    } else {
      setCodeParam([...codeParam, value]);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    axios
      .post('http://localhost:5000/api/search', { 
        courseQuery: query,
        subject_param: subjectParam,
        code_param: codeParam,
    })
      .then((response) => {
        setCourseResults(response.data.result);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="coursesearch-container h-full w-screen flex flex-col items-center justify-center">
      <div className="coursesearch-header w-full bg-slate-700">
        <div className='coursesearch-text-container mt-36 mb-4 ml-16 md:ml-32 font-oswald'>
          <h1 className="text-4xl md:text-6xl text-white">COURSE SEARCH</h1>
        </div>
      </div>
        <div className="coursesearch-content bg-white text-center my-16 font-oswald">
          <p className="text-lg mb-2">Enter a query for courses:</p>
          <form onSubmit={handleFormSubmit} className="flex flex-col items-center mb-4">
              <div className="mb-4">
                  <input
                  type="text"
                  placeholder="ex. arabic literature"
                  value={query}
                  onChange={handleInputChange}
                  className="px-2 py-3 border border-blue-900 rounded-md focus:outline-none
                  focus:ring-2 focus:ring-blue-700 text-blue-800 max-w-full overflow-y-hidden break-words"
                  name="courseQuery"
                  />
              </div>
              <div className="mb-4 flex flex-col items-center">
                  <p className="text-lg mb-2">Enter desired course department (optional):</p>
                  <input
                  type="text"
                  placeholder="ex. CIS"
                  value={subjectParam}
                  onChange={handleSubjectParamChange}
                  className="px-2 py-3 border border-blue-900 rounded-md focus:outline-none
                  focus:ring-2 focus:ring-blue-700 text-blue-800 max-w-full overflow-y-hidden break-words"
                  name="subjectParam"
                  />
              </div>
              <div className="mb-4 flex flex-col items-center">
                  <p className="text-lg mb-2">Select course level by starting digit:</p>
                  <div className="flex items-center">
                      <input
                      type="checkbox"
                      id="codeParam1"
                      value="1"
                      checked={codeParam.includes("1")}
                      onChange={() => handleCodeParamChange("1")}
                      className="mr-2"
                      />
                      <label htmlFor="codeParam1" className="mr-4">1xxx</label>
                      <input
                      type="checkbox"
                      id="codeParam2"
                      value="2"
                      checked={codeParam.includes("2")}
                      onChange={() => handleCodeParamChange("2")}
                      className="mr-2"
                      />
                      <label htmlFor="codeParam2" className="mr-4">2xxx</label>
                      <input
                      type="checkbox"
                      id="codeParam3"
                      value="3"
                      checked={codeParam.includes("3")}
                      onChange={() => handleCodeParamChange("3")}
                      className="mr-2"
                      />
                      <label htmlFor="codeParam3" className="mr-4">3xxx</label>
                      <input
                      type="checkbox"
                      id="codeParam4"
                      value="4"
                      checked={codeParam.includes("4")}
                      onChange={() => handleCodeParamChange("4")}
                      className="mr-2"
                      />
                      <label htmlFor="codeParam4">4xxx</label>
                  </div>
              </div>
              <button
                  type="submit"
                  className="bg-blue-900 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-colors duration-300"
              >
                  Generate courses
              </button>
              </form>

          {courseResults.length > 0 && (
            <div>
              {courseResults.map((courseResult, index) => (
                <div key={index} >
                  <h2>{courseResult.subject} {courseResult.code} - {courseResult.title}</h2>
                  <p>{courseResult.description}</p>
                </div>
              ))}
            </div>
          )}
      </div>
    </div>
  );
};
