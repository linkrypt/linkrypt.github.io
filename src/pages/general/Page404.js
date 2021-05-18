import React from "react";
import { Link } from "react-router-dom";

import { Button } from "reactstrap";

const Page404 = () => (
  <div class="container h-100 d-flex justify-content-center">
    <div class="my-auto text-center">
      <h1 className="display-1 font-weight-bold">404</h1>
      <p className="h1">Sorry, the page you were looking for doesn't exist.</p>
      <br></br>
      <Link to="/">
        <Button color="primary" size="lg">
          Back to linkrypt
      </Button>
      </Link>
    </div>
  </div>
);

export default Page404;
