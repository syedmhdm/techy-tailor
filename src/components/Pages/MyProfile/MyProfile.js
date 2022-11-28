import styles from "./MyProfile.module.css";

const MyProfile = (props) => {
  const filename = "Techy-tailor-logo.png";

  return (
    <form className={styles.form}>
      <div className={styles.formRow}>
        <div
          className={`${styles.labelAndInputDiv} ${styles.positionRelative}`}
        >
          <label htmlFor='businesslogo'>Business Logo</label>
          <input
            disabled
            className={styles.fileInput}
            type={"file"}
            id='businesslogo'
            name='businesslogo'
          />
          <div className={styles.filenamediv}>{filename}</div>
        </div>
        <div className={styles.labelAndInputDiv}>
          <label htmlFor='businessname'>Business Name</label>
          <input
            disabled
            value={"Modiste's Stitch"}
            id='businessname'
            name='businessname'
            type={"text"}
          />
        </div>
      </div>
      <div className={styles.formRow}>
        <div className={styles.labelAndInputDiv}>
          <label htmlFor='email'>Email</label>
          <input
            disabled
            value={"modistesstitch@gmail.com"}
            name='email'
            type={"text"}
            id={"email"}
          />
        </div>
        <div className={styles.labelAndInputDiv}>
          <label htmlFor='phone'>Phone</label>
          <input
            disabled
            value={"9955953241"}
            name='phone'
            type={"number"}
            id={"phone"}
          />
        </div>
      </div>
      <div className={styles.formRow}>
        <div className={styles.labelAndInputDiv}>
          <label htmlFor='address'>Address</label>
          <input
            disabled
            value={"Plot No 18, Faridabad, Chennai, Tamil Nadu - 121001"}
            id='address'
            name='address'
            type={"text"}
          />
        </div>
      </div>
      <div className={styles.formRow}>
        <div className={styles.labelAndInputDiv}>
          <label htmlFor='city'>City</label>
          <input
            disabled
            value={"Chennai"}
            id='city'
            name='city'
            type={"text"}
          />
        </div>
        <div className={styles.labelAndInputDiv}>
          <label htmlFor='state'>State</label>
          <input
            disabled
            value={"Tamil Nadu"}
            id='state'
            name='state'
            type={"text"}
          />
        </div>
      </div>
      <div className={styles.formRow}>
        <div className={styles.labelAndInputDiv}>
          <label htmlFor='country'>Country</label>
          <input
            disabled
            value={"India"}
            id='country'
            name='country'
            type={"text"}
          />
        </div>
        <div className={styles.labelAndInputDiv}>
          <label htmlFor='zipcode'>Zip Code</label>
          <input
            disabled
            value={"121001"}
            id='zipcode'
            name='zipcode'
            type={"text"}
          />
        </div>
      </div>
      <div className={styles.formRow}>
        <div className={styles.labelAndInputDiv}>
          <label htmlFor='foundedyear'>Founded Year</label>
          <input
            disabled
            value={"1972"}
            id='foundedyear'
            name='foundedyear'
            type={"text"}
          />
        </div>
        <div className={styles.labelAndInputDiv}>
          <label htmlFor='noofemployees'>Number Of Employees</label>
          <input
            disabled
            value={"2300"}
            id='noofemployees'
            name='noofemployees'
            type={"text"}
          />
        </div>
      </div>
      <div className={styles.btnDiv}>
        {/* <button>Update Profile</button> */}
      </div>
      <div className={styles.otherlinksdiv}>
        <small>
          {" "}
          Copyright © 2021 by Modiste's Stitch. All rights reserved.
        </small>
      </div>
    </form>
  );
};

export default MyProfile;
