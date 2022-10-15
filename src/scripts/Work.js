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
                        <h5 className="card-title">Software Developer </h5>
                        <h5 className="card-title"> July 2020 – Current </h5>
                    </nav>
                    <nav className="navbar">
                        <h10>Government of Canada</h10>
                    </nav>
                    <ul>
                        <li> Developing interal web applications. Managing microservices to add new features and to fix any bugs. </li>
                        <li> Integrating new services to work seamlessly with application in order to add new features.  </li>
                        <li> Using the Atlassian suite (JIRA, Confluence) to ensure stable deployments and clear communication with team members. </li>
                        <li> Technologies: JavaScript, Angular, Java, Springboot, HTML/CSS, Git </li>
                    </ul>
                </div>
                <div className="card card-style" >
                    <nav className="navbar">
                        <h5 className="card-title">Software Developer </h5>
                        <h5 className="card-title"> June 2020 – Aug 2021 </h5>
                    </nav>
                    <nav className="navbar">
                        <h10>Bell Canada</h10>
                    </nav>
                    <ul>
                        <li> Developing dashboards to display competitor mobile network speeds across Canada using Python Dash, Flask, MariaDB, Elasticsearch and Hadoop.  </li>
                        <li> Utilizing the Slack API to create detailed alerts on market changes of competitors.  </li>
                        <li> Scraping webpages to get information about incoming competitor site requests, using selenium. </li>
                        <li> Utilizing the Atlassian suite of tools (JIRA, Confluence) to maintain clear lines of communication with team members and project stakeholders </li>
                        <li> Technologies: Python, Dash, CSS, SQL, Docker, Git </li>
                    </ul>
                </div>
                <div className="card card-style" >
                    <nav className="navbar">
                        <h5 className="card-title">Technical Application Analyst </h5>
                        <h5 className="card-title"> Feb 2019 – May 2020 </h5>
                    </nav>
                    <nav className="navbar">
                        <h10>Tata Consultancy Services (Contractor at RBC Bank) </h10>
                    </nav>
                    <ul>
                        <li> Developed queries to give accurate reports of potential fraudulent transactions or missing transactions to assist with the development of the application.  </li>
                        <li> Developed scripts in order to help automate daily tasks. This includes execution of SQL queries and the automatic creation of spread sheets detailing issues in the system.  </li>
                        <li> Collaborated with other teams to organize major upgrades in order to improve the system performance without causing a major downtime to the system. </li>
                        <li> Supported production environment and resolved any failures or memory issues to ensure that the application was preforming as expected. </li>
                        <li> Technologies: Python, Bash, PowerShell, SQL, Hadoop, DB2 </li>
                    </ul>
                </div>
                <div className="card card-style" >
                    <nav className="navbar">
                        <h5 className="card-title"> Project Engineer </h5>
                        <h5 className="card-title"> May 2018 – Jan 2019 </h5>
                    </nav>
                    <nav className="navbar">
                        <h10> Evertz Microsystems </h10>
                    </nav>
                    <ul>
                        <li> Automated the pre-possessing and transcoding of assets in order for customers to play out videos to their respective users and clients. </li>
                        <li> Developed the primary scripts for NBCU’s non-linear delivery of assets to media service providers to transfer assets to various locations using different transfer methods, such as Signiant and Faspex.</li>
                        <li> Refactored SQL queries and reduced run time of existing queries by 50%, in order to improve migration to a new DBMS. </li>
                        <li> Technologies: JavaScript, Python, SQL, DB2, MariaDB, Git </li>
                    </ul>
                </div>
            </div>
        );
    }
}


export default Work;