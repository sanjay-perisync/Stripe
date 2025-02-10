const ContinueBtn = ({ isDisabled, onClick }) => {
  return (
    <button
      className={`w-full md:w-auto px-6 py-2 rounded-lg text-white font-medium 
        ${isDisabled ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"}`}
      disabled={isDisabled}
      onClick={() => {
        if (!isDisabled) {
          console.log("Continue button clicked!");
          onClick();
        }
      }}
    >
      Continue →
    </button>
  );
};

export default ContinueBtn;
