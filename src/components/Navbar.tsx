const Navbar: React.FC = () => {
  return (
    <nav
      className="flex justify-center font-bold text-[#0a1127] bg-[#ace0f1] h-[67px]"
      dir="rtl"
    >
      <div className="flex my-auto">
        <button>
          {" "}
          <div className="ml-24 text-lg">درباره هوشا</div>
        </button>
        <button>
          {" "}
          <div className="ml-24 text-lg">سرویس ها</div>
        </button>
        <button>
          {" "}
          <div className="ml-24 text-lg">درباره ما</div>
        </button>
        <button>
          {" "}
          <div className="ml-24 text-lg">تماس با ما</div>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
