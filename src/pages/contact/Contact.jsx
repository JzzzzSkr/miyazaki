import "./Contact.scss";
// import '../../../public/assets/bglinkus2.jpg'

const Contact = () => {
  return (
    <div className="conatctWrapper">
      <img src="./assets/bglinkus.jpg" alt="" />
      <div className="formSetion">
        {/* <img src="./assets/bglinkus2.jpg" alt="" /> */}
        <form class="row g-3 needs-validation contact-form" novalidate="">
          <div class="col-md-4 position-relative">
            <label for="validationTooltip01" class="form-label">
              First name
            </label>
            <input
              type="text"
              class="form-control"
              id="validationTooltip01"
              value=""
              required=""
            />
            <div class="valid-tooltip">Looks good!</div>
          </div>
          <div class="col-md-4 position-relative">
            <label for="validationTooltip02" class="form-label">
              Last name
            </label>
            <input
              type="text"
              class="form-control"
              id="validationTooltip02"
              value=""
              required=""
            />
            <div class="valid-tooltip">Looks good!</div>
          </div>
          <div class="col-md-4 position-relative">
            <label for="validationTooltip02" class="form-label">
              Email address
            </label>
            <input
              type="text"
              class="form-control"
              id="validationTooltip02"
              value=""
              required=""
            />
            <div class="valid-tooltip">Looks good!</div>
          </div>
          <div class="col-md-6 position-relative">
            <label for="validationTooltip03" class="form-label">
              City
            </label>
            <input
              type="text"
              class="form-control"
              id="validationTooltip03"
              required=""
            />
            <div class="invalid-tooltip">Please provide a valid city.</div>
          </div>
          <div class="col-md-3 position-relative">
            <label for="validationTooltip04" class="form-label">
              State
            </label>
            <select class="form-select" id="validationTooltip04" required="">
              <option selected="" disabled="" value="">
                Choose...
              </option>
              <option>TAS</option>
            </select>
            <div class="invalid-tooltip">Please select a valid state.</div>
          </div>
          <div class="col-md-3 position-relative">
            <label for="validationTooltip05" class="form-label">
              Zip
            </label>
            <input
              type="text"
              class="form-control"
              id="validationTooltip05"
              required=""
            />
            <div class="invalid-tooltip">Please provide a valid zip.</div>
          </div>
          <div class="col-12">
            <button class="btn btn-primary" type="submit">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
