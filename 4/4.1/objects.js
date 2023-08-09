

// Property values are accessible using the dot notation
<script>
 {/* get property values of the object: */}
alert( user.name ); // John
alert( user.age ); // 30
</script>


// To remove a property, we can use the delete operator:
delete user.age;

// an alternative “square bracket notation” that works with any string:

<script>
"use strict";

let user = {};

 {/* set */}
user["likes birds"] = true;

 {/* get */}
alert(user["likes birds"]); // true

 {/* delete */}
delete user["likes birds"];
</script>