// an alternative “square bracket notation” that works with any string:

<script>
"use strict";

let user = {};

// set
user["likes birds"] = true;

// get
alert(user["likes birds"]); // true

// delete
delete user["likes birds"];
</script>