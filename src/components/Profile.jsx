import React from "react";

const Profile = () => {
  const [inputModal, setInputModal] = useState(false);

  const handleInputModal = () => {
    setInputModal(state => !state);
  };
  return (
    <div className="profile-wrapper">
      <section>
        <button
          type="button"
          class="nes-btn is-primary"
          onclick="document.getElementById('dialog-dark-rounded').showModal();"
        >
          Add Game
        </button>
        <dialog class="nes-dialog is-dark is-rounded" id="dialog-dark-rounded">
          <form method="dialog">
            <p class="title">Dark and Rounded dialog</p>
            <p>Alert: this is a dialog.</p>
            <menu class="dialog-menu">
              <button class="nes-btn">Cancel</button>
              <button class="nes-btn is-primary">Confirm</button>
            </menu>
          </form>
        </dialog>
      </section>
    </div>
  );
};

export default Profile;
