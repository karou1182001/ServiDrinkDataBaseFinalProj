import React, { Fragment, useState } from "react";

const EditUser = ({ user }) => {
  /*=============================================
  =            VARIABLES            =
  =============================================*/
  const [name, setName] = useState(user.name);

  /*=============================================
  =            FUNCTIONS            =
  =============================================*/
  //edit name function
  const updateName = async e => {
    e.preventDefault();
    try {
      const body = { name };
      console.log(user.userid);
      const response = await fetch(
        `http://localhost:5000/ServiDrink/${user.userid}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        }
      );

      window.location = "/adminUsers";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <button
        type="button"
        class="btn btn-warning"
        data-toggle="modal"
        data-target={`#id${user.userid}`}
      >
        Edit
      </button>

      {/* 
        id = id10
      */}
      {/*Show box */}
      <div
        class="modal"
        id={`id${user.userid}`}
        onClick={() => setName(user.name)}
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Edit user</h4>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                onClick={() => setName(user.name)}
              >
                &times;
              </button>
            </div>

            <div class="modal-body">
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </div>

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-warning"
                data-dismiss="modal"
                onClick={e => updateName(e)}
              >
                Edit
              </button>
              <button
                type="button"
                class="btn btn-danger"
                data-dismiss="modal"
                onClick={() => setName(user.name)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditUser;