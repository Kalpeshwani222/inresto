const Item = require("../../../model/ItemModel");


const createProductReview = async (req, res) => {
  
  try {
       const {rating, comment, itemId} = req.body;

      const review = {
          rating : Number(rating),
          comment,
      };

      
      const item = await Item.findById(itemId);
    

//       const isReviewed = Item.reviews.find(rev => rev.user.toString() === req.user._id.toString());

//       if(isReviewed){
//         Item.reviews.forEach(rev=>{
//             if(rev.user.toString() === req.user._id.toString())
//             rev.rating = rating,
//             rev.comment = comment4

//         });
//       }else{
//         item.reviews.push(review);  
//         Item.numReviews = Item.reviews.length        
//       }
//    item.reviews.push(review);  
//         Item.numReviews = Item.reviews.length 
//     let avg = 0;

//   Item.ratings = Item.reviews.forEach(rev =>{
//       avg = avg + rev.rating
//   })/Item.reviews.length;

//   await Item.save();

  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = { createProductReview };
