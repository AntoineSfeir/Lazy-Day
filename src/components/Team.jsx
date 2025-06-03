import React from "react";

export const Team = (props) => {
  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Meet the Team</h2>
          <p>
            Our trusted team of professionals goes the extra mile to deliver exceptional cleaning and care to your home.
          </p>
        </div>

        <div id="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-3 col-sm-6 team">
                  <div className="thumbnail">
                    <img src={d.img} alt="..." className="team-img" />
                    <div className="caption">
                      <h4>{d.name}</h4>
                      <p>{d.job}</p>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>

        {/* Hiring Call-to-Action Section */}
        <div className="col-md-8 col-md-offset-2 join-us-section">
          <h2>Join the LazyDay Crew!</h2>
          <p><strong>$25/hour starting pay</strong></p>
          <ul className="list-unstyled">
            <li>✅ Flexible scheduling</li>
            <li>✅ Supportive, positive team culture</li>
            <li>✅ All supplies provided</li>
            <li>✅ Must be 18+</li>
            <li>✅ Legal to work in the U.S.</li>
            <li>✅ Reliable transportation</li>
            <li>✅ Available at least <strong>[X]</strong> days/week</li>
            <li>✅ Willingness to undergo a background check</li>
          </ul>
          <a href="#apply" className="btn btn-primary btn-lg">Apply Now</a>
        </div>
      </div>
    </div>
  );
};
