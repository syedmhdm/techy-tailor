import Form from "react-bootstrap/Form";
import styles from "./CustomerForm.module.css";

const CustomerForm = (props) => {
  return (
    <form className={styles.form}>
      <div className={styles.formRow}>
        <div className={styles.labelAndInputDiv}>
          <label htmlFor='firstname'>First Name</label>
          <input name='firstname' type={"text"} id={"firstname"} />
        </div>
        <div className={styles.labelAndInputDiv}>
          <label htmlFor='lastname'>Last Name</label>
          <input name='lastname' type={"text"} id={"lastname"} />
        </div>
      </div>
      <div className={styles.formRow}>
        <div className={styles.labelAndInputDiv}>
          <label htmlFor='email'>Email</label>
          <input name='email' type={"text"} id={"email"} />
        </div>
        <div className={styles.labelAndInputDiv}>
          <label htmlFor='phone'>Phone</label>
          <input name='phone' type={"number"} id={"phone"} />
        </div>
      </div>
      <div className={styles.formRow}>
        <div className={styles.labelAndInputDiv}>
          <label htmlFor='address'>Address</label>
          <input id='address' name='address' type={"text"} />
        </div>
      </div>

      <div className={styles.formRow}>
        <div className={styles.labelAndInputDiv}>
          <label htmlFor='numberofshirts'>Number Of Shirts</label>
          <input name='numberofshirts' type={"number"} id={"numberofshirts"} />
        </div>
        <div className={styles.labelAndInputDiv}>
          <label htmlFor='shirtmaterials'>Shirt Material</label>
          <select name='shirtmaterials' id='shirtmaterials'>
            <option value={"select"}>select</option>
            <option value={"ladies"}>ladies tailor</option>
            <option value={"mens"}>mens tailor</option>
            <option value={"kids"}>kids tailor</option>
            <option value={"all"}>all the above</option>
          </select>
        </div>
      </div>
      <div className={styles.formRow}>
        <div className={styles.labelAndInputDiv}>
          <label htmlFor='numberofpants'>Number Of Pants</label>
          <input name='numberofpants' type={"number"} id='numberofpants' />
        </div>
        <div className={styles.labelAndInputDiv}>
          <label htmlFor='pantmaterials'>Pant Material</label>
          <select name='pantmaterials' id='pantmaterials'>
            <option value={"select"}>select</option>
            <option value={"ladies"}>ladies tailor</option>
            <option value={"mens"}>mens tailor</option>
            <option value={"kids"}>kids tailor</option>
            <option value={"all"}>all the above</option>
          </select>
        </div>
      </div>
      <div className={styles.formRow}>
        <div className={styles.labelAndInputDiv}>
          <label htmlFor='totalamount'>Total Amount</label>
          <input name='totalamount' type={"number"} id='totalamount' />
        </div>
        <div className={styles.labelAndInputDiv}>
          <label htmlFor='advanceamount'>Advance Amount</label>
          <input name='advanceamount' type={"number"} id='advanceamount' />
        </div>
      </div>
      <div className={styles.formRow}>
        <div className={styles.labelAndInputDiv}>
          <label htmlFor='advancepaidon'>Advance paid on</label>
          <input name='advancepaidon' type={"date"} id='advancepaidon' />
        </div>
        <div className={styles.labelAndInputDiv}>
          <label htmlFor='deliverydate'>Delivery Date</label>
          <input name='deliverydate' type={"date"} id='deliverydate' />
        </div>
      </div>

      <div className={styles.btnDiv}>
        <div className={styles.tobepaid}>
          <b>500</b> rupees to be paid on delivery date
        </div>
        <button>Add Customer</button>
      </div>
    </form>
  );
};

export default CustomerForm;
