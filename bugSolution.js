```javascript
//Correct use of $inc operator
db.collection('myCollection').updateOne({"_id":ObjectId("someId")},{$inc:{"field":value}});
//Additional check to ensure the field exists and is a number before updating
db.collection('myCollection').findOne({"_id":ObjectId("someId")}).then(doc=>{if(doc && typeof doc.field ==='number'){db.collection('myCollection').updateOne({"_id":ObjectId("someId")},{$inc:{"field":value}});}});
```