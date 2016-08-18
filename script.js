// //code to replace items in string
// var str = "Enriched Flour [Wheat Flour, Niacin, Reduced Iron, Thiamin Mononitrate (Vitamin B1), Riboflavin (Vitamin B2), Folic Acid], Peanut Butter (Roasted Peanuts), Partially Hydrogenated Soybean and/or Cottonseed Oil, Sugar, High Fructose Corn Syrup, Dextrose, Salt, Contains Two Percent or Less of Malted Barley Flour, Leavening (Baking Soda, Monocalcium Phosphate, Sodium Acid Pyrophosphate), Soy Lecithin, Cornstarch, Sodium Sulfite, Cheddar Cheese (Milk, Cheese Cultures, Salt, Enzymes), Yellow No. 6, Red Pepper, Buttermilk, Whey, Disodium Phosphate.";
// var res = str.replace(/\[/g, ",");
// var res2 = res.replace(/\]/g, " ");
// var res3 = res2.replace(/\(/g, ",");
// var res4 = res3.replace(/\)/g, " ");
// var res5 = res4.replace("and/or ", ",");
// var res6 = res5.replace(/Contains Two Percent or Less of/gi, " ");
// var res7 = res6.replace(/and /gi, ",");
// var res8 = res7.replace(/or /gi, ",");
// var arry = res8.split(",");
// console.log(arry);
//
// //refactored
// var str = "Unbleached Enriched Flour (Wheat Flour, Malted Barley Flour, Niacin, Reduced Iron, Thiamine Mononitrate, Riboflavin, Folic Acid), Water, Contains Less than 2% of Each of the Following: Rice Flour, Salt, Malt Syrup, Yeast, Ascorbic Acid Added as a Dough Conditioner.";
// var res = str.replace("and/or ", ",");
// var res2 = res.replace(/\[|\(|and |or /gi, ",");
// var res3 = res2.replace(/\]|\)|\.|Contains Two Percent or Less of|Contains Less than 2% of Each of the Following:/g, "");
// var arry = res3.split(",");
// console.log(arry);


//function to turn ingredient list into an array
var pretzel = "Enriched Flour [Wheat Flour, Niacin, Reduced Iron, Thiamin Mononitrate (Vitamin B1), Riboflavin (Vitamin B2), Folic Acid], Peanut Butter (Roasted Peanuts), Partially Hydrogenated Soybean and/or Cottonseed Oil, Sugar, High Fructose Corn Syrup, Dextrose, Salt, Contains Two Percent or Less of Malted Barley Flour, Leavening (Baking Soda, Monocalcium Phosphate, Sodium Acid Pyrophosphate), Soy Lecithin, Cornstarch, Sodium Sulfite, Cheddar Cheese (Milk, Cheese Cultures, Salt, Enzymes), Yellow No. 6, Red Pepper, Buttermilk, Whey, Disodium Phosphate.";

var sample ="Cultured Nonfat Milk, Strawberry Fruit Base [Strawberries, Crystalline Fructose, Natural Flavor, Corn Starch-Modified, Sucralose, Citric Acid, Artificial Color (FD&C Red 40)], Inulin (Polyfructose), Whey Protein Concentrate, Vitamin Premix [Magnesium Phosphate, Maltodextrin, Sodium Ascorbate, Vitamin E (Tocopheryl Acetate), Ferric Orthophosphate, Vitamin A Palmitate, Niacinamide, Zinc, Oxide, D-Calcium Pantothenate, Manganese Sulfate, Vitamin D3 (Cholecalciferol), Pyridoxine Hydrochloride, Thiamine Mononitrate, Chromium Chloride, Sodium Selenite, Riboflavin, Vitamin B12 (Cyanocobalamin), Folic Acid, Potassium Iodide, Biotin], Acesulfame Potassium (a Sweetener), Potassium Sorbate (to Maintain Freshness).";

function ingredientArry(str) {
  str = str.toLowerCase();
  var res = str.replace(/\]|\)|\.|Contains Two Percent or Less of|Contains Less than 2% of Each of the Following:/g, "");
  var res2 = res.replace("and/or ", ",");
  var res3 = res2.replace(/\[|\(|and |or |\:/gi, ",");
  var arry = res3.split(",");
  var noSpaceArry = [];
  for(var i = 0; i < arry.length; i++) {
    noSpaceArry.push(arry[i].trim());
  }
  console.log(JSON.stringify(noSpaceArry));

}

ingredientArry(pretzel);
ingredientArry(sample);

//example db query
// SELECT
//  	*
// FROM
// 	gluten
// WHERE
//  	ingredient IN ('enriched flour',
//   'wheat flour',
//   'niacin',
//   'reduced iron',
//   'thiamin mononitrate',
//   'vitamin b1',
//   'riboflavin',
//   'vitamin b2',
//   'folic acid',
//   'peanut butter',
//   'roasted peanuts',
//   'partially hydrogenated soybean',
//   'cottonseed oil',
//   'sugar',
//   'high fructose corn syrup',
//   'dextrose',
//   'salt',
//   'contains two percent',
//   'less of malted barley flour',
//   'leavening',
//   'baking soda',
//   'monocalcium phosphate',
//   'sodium acid pyrophosphate',
//   'soy lecithin',
//   'cornstarch',
//   'sodium sulfite',
//   'cheddar cheese',
//   'milk',
//   'cheese cultures',
//   'salt',
//   'enzymes',
//   'yellow no 6',
//   'red pepper',
//   'buttermilk',
//   'whey',
//   'disodium phosphate');
