import React, { Component } from 'react';


class Work extends Component {
  /**
   * Class that represents the my Work Experience 
   */
  render() {

    return (
  
        <div className="section"> 
            <p className="header" id="Work">Work Experience</p>
            <div className="card card-style" >
                <nav className="navbar">
                    <h5 className="card-title"> Tata Consulting Services - Technical Application Analyst </h5> 
                    <h5 className="card-title"> Jan 2019 – Current </h5>
                </nav>
                <ul>
                    <li> 
                        Triaging and fixing issues arise at RBC Bank’s Anti Money Laundering system. Created SQL queries to help find causes of issues. 
                    </li> 
                    <li> 
                        Created scripts in Batch, Python, Shell to help automate daily tasts. This includes execution of SQL queries and the creation of Excel 
                        spreed sheets detailing issues of irregularities in the systems. 
                    </li>
                    <li> 
                        Preformed upgrades and changes on the live Linux based production environment.   
                    </li>
                </ul>
            </div>
            <div className="card card-style" >
                <nav className="navbar">
                    <h5 className="card-title"> Evertz Microsystems – Project Engineer </h5> 
                    <h5 className="card-title"> June 2018 – Jan 2019 </h5>
                </nav>
                <ul>
                    <li> 
                        Created scripts to automate the prepossessing and transfer of assets using JavaScript and Python. Git was used as the primary version control manager for scripts
                    </li> 
                    <li>
                        Created the primary script for Non Linear Delivery system in the NBCU project. This system would deliver assets to multiple different platforms with 
                        different transfer types including Signiant and Faspex. 
                    </li>
                    <li> 
                        Created SQL queries that would help users search for different assets in the UI. Users would be able to provide different parameters for the search. 
                    </li>
                    <li> 
                        Performed manual testing to ensure that the code worked as expected in all cases. All debugging and testing was done in an Ubuntu Linux environment. 
                    </li>
                    <li> 
                        Utilized agile work methodologies to ensure that scripts can be changed easily to meet customers’ requirements. Attended daily scrum meetings to collaborate with team members and inform them of any issues.  
                    </li> 
                    <li> 
                        Participated in bi weekly sprint meetings to organize workload for the upcoming sprint. Used JIRA rank tickets based on their difficult and time required.  
                    </li>
                </ul>
            </div>
        </div>
    );
  }
}


export default Work;