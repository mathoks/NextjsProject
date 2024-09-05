import React, { useEffect } from "react";

const productCategories = [
   {key: 1, tagname: "Electronics"},
   {key: 2, tagname: "Furniture"},
   {key: 3, tagname: "Safety"},
   {key: 4, tagname: "Auto Parts"},
   {key: 5, tagname: "Safety"},
   {key: 6, tagname: "Baby Items"},
   {key: 7, tagname: "Mobile Phone"},
   {key: 8, tagname: "Shoes & Mens Wear"},
   {key: 9, tagname: "Metals & Alloys"},
   {key: 10, tagname: "Jewelries and Watches" },
   {key: 11, tagname:  "Machine Parts"},
   {key: 12, tagname: "General Articles"},
   {key: 13, tagname: "Hairs & Wigs"},
   {key: 14, tagname: "Toys & Games"},
   {key: 15, tagname: "Artworks"},
   {key: 16, tagname: "Home Interior & Decor"},
   {key: 17, tagname: "Bags & Luggage"},
   {key: 18, tagname: "Building Materials"},
   {key: 19, tagname:   "General Articles" },
   {key: 20, tagname: "Musical Instruments"},
   {key: 21, tagname: "Tools and Hardware"},
   {key: 22, tagname: "Home Appliances"},
   {key: 23, tagname:  "Chemicals"},
   {key: 24, tagname:   "Food & Beverage"}, 
   {key: 25, tagname:   "Phone Accessories"},
   {key: 26, tagname:  "Gifts & Craft"},
   {key: 27, tagname:  "School & Office Supplies"},
   {key: 28, tagname:  "Lights & Lighting"},
   {key: 29, tagname: "Apparel & Accessories" },
   {key: 30, tagname:  "Cosmetics & Beauty"},
   {key: 31, tagname: "Power Transmission" },
   {key: 32, tagname:  "kitchen Wares"},
   {key: 33, tagname:  "Rubber & Plastics"},
   {key: 34, tagname: "Computer & Accesories"}
];

const handleCount = () => {
  const selectElement = document.getElementById("link_branch");
  const countElement = document.getElementById("selectedCount");

  selectElement.addEventListener("change", () => {
    const selectedOptions = selectElement.selectedOptions;
    countElement.textContent = selectedOptions.length;
  });
};

export const ProductCart = () => {
  const options = productCategories.map(({key, tagname}, id) => {
    return (
      <option value={key} key={id}>
        {tagname}
      </option>
    );
  });
  return (
    <div className=" no_border_select w-full">
      <select
        name="category"
        enterKeyHint="done"
        required
        id="cat"
        className=" p-4 px-0 flex  text-gray-900 w-full bg-white"
      >
        <option defaultValue={null} className="text-slate-400">
          Choose a category
        </option>
        {options}
      </select>
    </div>
  );
};

export const PricePolicy = () => {
  const price = ["NEGOTIABLE", "BESTPRICE"];

  const options = price.map((choice, id) => {
    return (
      <option key={id} value={choice}>
        {choice}
      </option>
    );
  });

  return (
    <div className="no_border_select">
      <select
        name="negotiable"
        id="flexi"
        enterKeyHint="done"
        className=" p-4 px-0 flex  text-gray-900  w-full bg-white"
      >
        <option defaultValue={""} className="text-slate-400">
          Price flexibility
        </option>
        {options}
      </select>
    </div>
  );
};

export const LinkToBranch = ({ option = [], branches = [] }) => {
  useEffect(() => {
    const El = document.getElementById("link_branch");
    if (El) El.selectedIndex = 0;
  }, [option]);

  if (option.length > 0 && branches.length > 0) {
    const Options = () => {
      return option.map((option) => {
        const matchingBranch = branches.find(
          ({ branch }) => option.branchName === branch.branchName
        );

        return (
          <React.Fragment key={option.id}>
            {matchingBranch && (
              <option
                key={matchingBranch.id}
                value={matchingBranch.id}
                className="text-green-400"
              >
                {matchingBranch.branch.branchName}
              </option>
            )}
            {!matchingBranch && (
              <option
                key={option.id}
                value={option.id}
                className="text-slate-950"
              >
                {option.branchName}
              </option>
            )}
          </React.Fragment>
        );
      });
    };

    return (
      <div className="no_border_select">
        <select
          name="link"
          enterKeyHint="done"
          multiple
          id="link_branch"
          className="px-0 flex  text-gray-900  w-full bg-white rounded-t-md h-10 overflow-y-scroll"
        >
          <option disabled className="text-slate-400">
            Link Product to Branches
          </option>
          <Options />
        </select>
      </div>
    );
  } else if (option.length > 0 && branches.length === 0) {
    const options2 = option.map(({ id, branchName }, ids) => {
      return (
        <option key={ids} value={id} className="text-slate-950">
          {branchName}
        </option>
      );
    });

    return (
      <div className="no_border_select">
        <select
          name="link"
          enterKeyHint="done"
          multiple
          id="link_branch"
          className="px-0 flex  text-gray-900  w-full bg-white rounded-t-md h-10 overflow-y-scroll"
        >
          <option disabled className="text-slate-400">
            Link Product to Branches
          </option>
          {options2}
        </select>
      </div>
    );
  } else if (option.length === 0 && branches.length > 0) {
    const options3 = branches.map(({ id, branch: { branchName } }, ids) => {
      return (
        <option key={ids} value={id} className=" text-green-400">
          {branchName}
        </option>
      );
    });
    return (
      <div className="no_border_select">
        <select
          name="link"
          enterKeyHint="done"
          multiple
          id="link_branch"
          className="px-0 flex  text-gray-900  w-full bg-white rounded-t-md h-10 overflow-y-scroll"
        >
          <option disabled className="text-slate-400">
            unLink Product to Branches
          </option>
          {options3}
        </select>
      </div>
    );
  } else if (option.length === 0 && branches.length === 0) {
    return <p className="text-red-400">You have not created any branch</p>;
  } else {
    return <p className="text-red-400">cant fetch branch</p>;
  }
};

export const Availability = () => {
  const Avail = [
    { name: "IN_STOCK", vis: "IN STOCK" },
    { name: "OUT_OF_STOCK", vis: "OUT OF STOCK" },
    { name: "COMING_SOON", vis: "COMING SOON" },
    { name: "LIMITED_STOCK", vis: "LIMITED STOCK" },
  ];

  const options = Avail.map(({ name, vis }, id) => {
    return (
      <option value={name} key={id}>
        {vis}
      </option>
    );
  });
  return (
    <div className="flex no_border_select ">
      <select
        name="availability"
        enterKeyHint="done"
        required
        id="avail"
        className=" p-4 px-0 flex  text-gray-900 w-full bg-white"
      >
        <option defaultValue={null} className="text-slate-400">
          {" "}
          Availability
        </option>
        {options}
      </select>
    </div>
  );
};

export const ProductStatus = () => {
  const values = [
    { name: "NEW", vis: "NEW" },
    { name: "FAIRLY_USED", vis: "FAIRLY USED" },
    { name: "REFURBISHED", vis: "REFURBISHED" },
  ];

  const options = values.map(({ name, vis }, id) => {
    return (
      <option value={name} name='status' id='status' key={id}>
        {vis}
      </option>
    );
  });
  return (
    <div className="flex no_border_select">
      <select
        name="status"
        enterKeyHint="done"
        required
        id="status"
        className=" p-4 px-0 flex  text-gray-900  w-full bg-white"
      >
        <option defaultValue={null} className="text-slate-400">
          Product status
        </option>
        {options}
      </select>
    </div>
  );
};
