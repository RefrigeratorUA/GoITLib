var myObj = {
    abc : 13
};
console.log(myObj.abc);
(function (_) {
    _.abc = 12;
    console.log(_.abc);
})(myObj);
