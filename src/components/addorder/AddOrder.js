import styles from "./AddOrder.module.css";

const AddOrder = () => {
  return (
    <form className={styles.form}>
      <div className={styles.formRow}>
        <div className={styles.labelAndInputDiv}>
          <label htmlFor='tailortype'>Select Tailor</label>
          <select defaultValue={"mens"} name='tailortype' id='tailortype'>
            <option value={"ladies"}>ladies tailor</option>
            <option value={"mens"}>mens tailor</option>
            <option value={"kids"}>kids tailor</option>
            <option value={"all"}>all the above</option>
          </select>
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
          <label htmlFor='city'>City</label>
          <input type={"text"} id='city' name='city' />
        </div>
        <div className={styles.labelAndInputDiv}>
          <label htmlFor='state'>State</label>
          <input type={"text"} id='state' name='state' />
        </div>
      </div>
      <div className={styles.formRow}>
        <div className={styles.labelAndInputDiv}>
          <label htmlFor='zip'>Postal / Zip Code</label>
          <input type={"text"} id='zip' name='zip' />
        </div>
        <div className={styles.labelAndInputDiv}>
          <label htmlFor='country'>Country</label>
          <input type={"text"} id='country' name='country' />
        </div>
      </div>
      <div className={styles.formRow}>
        <div className={styles.labelAndInputDiv}>
          <label htmlFor='dob'>Date Of Birth</label>
          <input name='dob' type={"number"} id={"dob"} />
        </div>
        <div className={styles.labelAndInputDiv}>
          <label htmlFor='gender'>Gender</label>
          <input name='gender' type={"text"} id={"gender"} />
        </div>
      </div>
      <div className={styles.formRow}>
        <div className={styles.labelAndInputDiv}>
          <label htmlFor='yearsexp'>Experience In Years:</label>
          <input name='yearsexp' type={"number"} id='yearsexp' />
        </div>
        <div className={styles.labelAndInputDiv}>
          <label htmlFor='tailortype'>Tailor Type</label>
          <select name='tailortype' id='tailortype'>
            <option value={"select"}>select</option>
            <option value={"ladies"}>ladies tailor</option>
            <option value={"mens"}>mens tailor</option>
            <option value={"kids"}>kids tailor</option>
            <option value={"all"}>all the above</option>
          </select>
        </div>
      </div>
      <div className={styles.btnDiv}>
        <button>Add Tailor</button>
      </div>
    </form>
  );
};

export default AddOrder;
