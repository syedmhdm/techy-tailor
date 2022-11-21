import styles from "./MyProfile.module.css";

const MyProfile = (props) => {
  const filename = "";

  return (
    <form className={styles.form}>
      <div className={styles.formRow}>
        <div
          className={`${styles.labelAndInputDiv} ${styles.positionRelative}`}
        >
          <label htmlFor='businesslogo'>Business Logo</label>
          <input
            className={styles.fileInput}
            type={"file"}
            id='businesslogo'
            name='businesslogo'
          />
          <div className={styles.filenamediv}>{filename}</div>
        </div>
        <div className={styles.labelAndInputDiv}>
          <label htmlFor='businessname'>Business Name</label>
          <input id='businessname' name='businessname' type={"text"} />
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
          <input id='city' name='city' type={"text"} />
        </div>
        <div className={styles.labelAndInputDiv}>
          <label htmlFor='state'>State</label>
          <input id='state' name='state' type={"text"} />
        </div>
      </div>
      <div className={styles.formRow}>
        <div className={styles.labelAndInputDiv}>
          <label htmlFor='country'>Country</label>
          <input id='country' name='country' type={"text"} />
        </div>
        <div className={styles.labelAndInputDiv}>
          <label htmlFor='zipcode'>Zip Code</label>
          <input id='zipcode' name='zipcode' type={"text"} />
        </div>
      </div>
      <div className={styles.formRow}>
        <div className={styles.labelAndInputDiv}>
          <label htmlFor='foundedyear'>Founded Year</label>
          <input id='foundedyear' name='foundedyear' type={"text"} />
        </div>
        <div className={styles.labelAndInputDiv}>
          <label htmlFor='noofemployees'>Number Of Employees</label>
          <input id='noofemployees' name='noofemployees' type={"text"} />
        </div>
      </div>
      <div className={styles.btnDiv}>
        <button>Update Profile</button>
      </div>
      <div className={styles.otherlinksdiv}>
        <div>website</div>
        <div>socials</div>
        <div>privacy policy</div>
      </div>
    </form>
  );
};

export default MyProfile;
