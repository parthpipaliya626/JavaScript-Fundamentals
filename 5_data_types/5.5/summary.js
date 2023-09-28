/*
 A cheat sheet of array methods:

 *To add/remove elements:*

            push(...items) – adds items to the end,
            pop() – extracts an item from the end,
            shift() – extracts an item from the beginning,
            unshift(...items) – adds items to the beginning.
            splice(pos, deleteCount, ...items) – at index pos deletes deleteCount elements and inserts items.
            slice(start, end) – creates a new array, copies elements from index start till end (not inclusive) into it.
            concat(...items) – returns a new array: copies all members of the current one and adds items to it. If any of items is an array, then its elements are taken.


 * To search among elements: *
            indexOf/lastIndexOf(item, pos) – look for item starting from position pos, return the index or -1 if not found.
            includes(value) – returns true if the array has value, otherwise false.
            find/filter(func) – filter elements through the function, return first/all values that make it return true.
            findIndex is like find, but returns the index instead of a value.




*/