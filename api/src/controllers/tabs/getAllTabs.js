const {
  tab1,
  tab2,
  tab3,
  tab4,
  tab5,
  tab6,
  tab7,
  tab8,
  tab9,
  tab10,
  tab11,
  tab12,
  tab13,
  tab14,
} = require("../../db.js");
const getAllTabs = async (req, res) => {
  try {
    const tabOne = await tab1.findAll();
    const tabTwo = await tab2.findAll();
    const tabThree = await tab3.findAll();
    const tabFour = await tab4.findAll();
    const tabFive = await tab5.findAll();
    const tabSix = await tab6.findAll();
    const tabSeven = await tab7.findAll();
    const tabEigth = await tab8.findAll();
    const tabNine = await tab9.findAll();
    const tabTen = await tab10.findAll();
    const tabEleven = await tab11.findAll();
    const tabTwelve = await tab12.findAll();
    const tabThirteen = await tab13.findAll();
    const tabFourteen = await tab14.findAll();

    const allTabs = [
      ...tabOne,
      ...tabTwo,
      ...tabThree,
      ...tabFour,
      ...tabFive,
      ...tabSix,
      ...tabSeven,
      ...tabEigth,
      ...tabNine,
      ...tabTen,
      ...tabEleven,
      ...tabTwelve,
      ...tabThirteen,
      ...tabFourteen,
    ];

    res.status(200).json({
      message: "All Tabs",
      allTabs,
    });
  } catch (err) {
    res.status(400).json({
      message: "Error",
      err,
    });
  }
};
module.exports = getAllTabs;
