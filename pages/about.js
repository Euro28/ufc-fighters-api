export default function About() {
  return (
    <div>
      <body>
        This is the about page
        <h2> What is this?</h2>
        <p>
          This API provides easily accessible programmatically formatted set of
          data on all UFC fights since around mid 2010s This includes the
          following fields on each fight such as odds results, statistics. The
          data is formatted in JSON, and is exposed in both a RESTish
          implementation and a GraphQL that will allow you to collect the data
        </p>
        <h2>What can this be used for</h2>
        <p>Comparing data on UFC fighters for fight predictions is possible,</p>
        <h2>CopyRight</h2>
        <p>UFC and all associated names are copyright of endevour
        The project is open source and carries an MIT license, 
        the fight data has been collected from a Kaggle source 
        (LINK HERE) while fighter information has been scraped 
        from websites such as sherdog and ufc stats.</p>
      </body>
    </div>
  );
}
