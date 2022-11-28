import { useRef } from "react";
import Form from "react-bootstrap/Form";
import styles from "./CustomerForm.module.css";

const CustomerForm = (props) => {
  function showToast(msg) {
    // Get the snackbar DIV
    const x = document.getElementById("snackbar");

    // Add the "show" class to DIV
    x.className = "show";
    x.innerText = msg;

    // After 3 seconds, remove the show class from DIV
    setTimeout(function () {
      x.className = x.className.replace("show", "");
    }, 4000);
  }

  const onAddCustomerSubmit = (event) => {
    event.preventDefault();
    const firstName = document.getElementById("firstname");
    const lastName = document.getElementById("lastname");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const address = document.getElementById("address");
    const no_of_shirts = document.getElementById("numberofshirts");
    const no_of_pants = document.getElementById("numberofpants");
    const shirtMaterial = document.getElementById("shirtmaterials");
    const pantMaterial = document.getElementById("pantmaterials");
    const totalAmount = document.getElementById("totalamount");
    const advanceAmount = document.getElementById("advanceamount");
    const advancePaidOn = document.getElementById("advancepaidon");
    const deliveryDate = document.getElementById("deliverydate");

    const formData = {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      phone: phone.value,
      address: address.value,
      no_of_shirts: no_of_shirts.value,
      no_of_pants: no_of_pants.value,
      shirtMaterial: shirtMaterial.value,
      pantMaterial: pantMaterial.value,
      totalAmount: totalAmount.value,
      advanceAmount: advanceAmount.value,
      advancePaidOn: advancePaidOn.value,
      deliveryDate: deliveryDate.value,
    };

    if (Number(totalAmount.value) < Number(advanceAmount.value)) {
      // alert("Advance amount cannot be greater than total amount!");
      showToast("Advance amount cannot be greater than total amount!");
      return;
    }

    if (phone.value.length !== 10) {
      showToast("phone number must have 10 digits");
      return;
    }

    fetch("http://localhost:5000/customers/add", {
      method: "post",
      body: JSON.stringify(formData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.status === "success") {
          firstName.value = "";
          lastName.value = "";
          email.value = "";
          phone.value = "";
          address.value = "";
          no_of_shirts.value = "";
          no_of_pants.value = "";
          shirtMaterial.value = "";
          pantMaterial.value = "";
          totalAmount.value = "";
          advanceAmount.value = "";
          // advancePaidOn.value = "";
          deliveryDate.value = "";
          showToast(response.message);
        } else {
          showToast(response.message);
        }
      });
  };

  return (
    <form
      onSubmit={onAddCustomerSubmit}
      id='customerform'
      className={styles.form}
    >
      <div className={styles.formRow}>
        <div className={styles.labelAndInputDiv}>
          <label htmlFor='firstname'>
            First Name
            <span style={{ color: "red" }}>*</span>
          </label>
          <input
            maxLength={45}
            required
            name='firstname'
            type={"text"}
            id={"firstname"}
          />
        </div>
        <div className={styles.labelAndInputDiv}>
          <label htmlFor='lastname'>
            Last Name<span style={{ color: "red" }}>*</span>
          </label>
          <input
            required
            maxLength={45}
            name='lastname'
            type={"text"}
            id={"lastname"}
          />
        </div>
      </div>
      <div className={styles.formRow}>
        <div className={styles.labelAndInputDiv}>
          <label htmlFor='email'>
            Email<span style={{ color: "red" }}>*</span>
          </label>
          <input
            maxLength={320}
            required
            name='email'
            type={"text"}
            id={"email"}
          />
        </div>
        <div className={styles.labelAndInputDiv}>
          <label htmlFor='phone'>
            Phone<span style={{ color: "red" }}>*</span>
          </label>
          <input
            maxLength={10}
            required
            name='phone'
            type={"number"}
            id={"phone"}
          />
        </div>
      </div>
      <div className={styles.formRow}>
        <div className={styles.labelAndInputDiv}>
          <label htmlFor='address'>
            Address<span style={{ color: "red" }}>*</span>
          </label>
          <input
            maxLength={200}
            required
            id='address'
            name='address'
            type={"text"}
          />
        </div>
      </div>

      <div className={styles.formRow}>
        <div className={styles.labelAndInputDiv}>
          <label htmlFor='numberofshirts'>
            Number Of Shirts<span style={{ color: "red" }}>*</span>
          </label>
          <input
            maxLength={4}
            required
            name='numberofshirts'
            type={"number"}
            id={"numberofshirts"}
          />
        </div>
        <div className={styles.labelAndInputDiv}>
          <label htmlFor='shirtmaterials'>
            Shirt Material<span style={{ color: "red" }}>*</span>
          </label>
          <select required name='shirtmaterials' id='shirtmaterials'>
            <option value={"select"}>select</option>
            <option value={"broadcloth"}>Broadcloth</option>
            <option value={"denim"}>Denim</option>
            <option value={"poplin"}>Poplin</option>
            <option value={"flannel"}>Flannel</option>
            <option value={"corduroy"}>Corduroy</option>
            <option value={"madras"}>Madras</option>
            <option value={"lawncloth"}>Lawncloth</option>
          </select>
        </div>
      </div>
      <div className={styles.formRow}>
        <div className={styles.labelAndInputDiv}>
          <label htmlFor='numberofpants'>
            Number Of Pants<span style={{ color: "red" }}>*</span>
          </label>
          <input
            maxLength={4}
            required
            name='numberofpants'
            type={"number"}
            id='numberofpants'
          />
        </div>
        <div className={styles.labelAndInputDiv}>
          <label htmlFor='pantmaterials'>
            Pant Material<span style={{ color: "red" }}>*</span>
          </label>
          <select required name='pantmaterials' id='pantmaterials'>
            <option value={"select"}>select</option>
            <option value={"denim"}>denim</option>
            <option value={"gabardine"}>gabardine</option>
            <option value={"wool"}>wool</option>
            <option value={"velvet"}>velvet</option>
            <option value={"cambric"}>cambric</option>
            <option value={"chenille"}>chenille</option>
          </select>
        </div>
      </div>
      <div className={styles.formRow}>
        <div className={styles.labelAndInputDiv}>
          <label htmlFor='totalamount'>
            Total Amount<span style={{ color: "red" }}>*</span>
          </label>
          <input
            maxLength={10}
            required
            name='totalamount'
            type={"number"}
            id='totalamount'
          />
        </div>
        <div className={styles.labelAndInputDiv}>
          <label htmlFor='advanceamount'>
            Advance Amount<span style={{ color: "red" }}>*</span>
          </label>
          <input
            maxLength={10}
            required
            name='advanceamount'
            type={"number"}
            id='advanceamount'
          />
        </div>
      </div>
      <div className={styles.formRow}>
        <div className={styles.labelAndInputDiv}>
          <label htmlFor='advancepaidon'>
            Advance paid on<span style={{ color: "red" }}>*</span>
          </label>
          <input
            disabled
            value={new Date().toISOString().split("T")[0]}
            required
            name='advancepaidon'
            type={"date"}
            id='advancepaidon'
          />
        </div>
        <div className={styles.labelAndInputDiv}>
          <label htmlFor='deliverydate'>
            Delivery Date<span style={{ color: "red" }}>*</span>
          </label>
          <input
            min={new Date().toISOString().split("T")[0]}
            required
            name='deliverydate'
            type={"date"}
            id='deliverydate'
          />
        </div>
      </div>

      <div className={styles.btnDiv}>
        {/* <div className={styles.tobepaid}>
          <b>500</b> rupees to be paid on delivery date
        </div> */}
        <button>Add Customer</button>
      </div>
      <div id='snackbar'></div>
    </form>
  );
};

export default CustomerForm;
