Create a form that will contain the following fields:
name - dish name (text field)
preparation_time - preparation time (duration field, would be nice if the input will be formatted like 00:00:00)
type - dish type (select field with the following options: pizza, soup, sandwich)
after selecting dish type, conditionally display other fields:
for pizza:
no_of_slices - # of slices (number field)
diameter - diameter (float field)
for soup:
spiciness_scale - spiciness scale (1-10)
for sandwich:
slices_of_bread - number of slices of bread required (number field)

All fields should be required (fields depending on the dish type should be required conditionally based on what type of dish is selected).

Data should be submitted via POST request as a JSON to https://umzzcc503l.execute-api.us-west-2.amazonaws.com/dishes/ and the form should support returned validation errors (if any).

Example request:
curl -H 'Content-Type: application/json' -X POST -d '{"name": "HexOcean pizza", "preparation_time": "01:30:22", "type": "pizza", "no_of_slices": 4, "diameter": 33.4}' https://umzzcc503l.execute-api.us-west-2.amazonaws.com/dishes/

Example response:
{
"diameter": 33.4,
"name": "HexOcean pizza",
"no_of_slices": 4,
"preparation_time": "01:30:22",
"type": "pizza",
"id": 1
}

Please focus on code cleanliness and quality.

Submit your solution to kingap+jf@hexocean.com within 7 days (168 h) from receiving this message. Solutions sent after this date or to a different email won’t be taken into account. The solution should include:

All source files,
Node + npm version,
A short README written in English that explains how to set up the project,
The time it took you to perform the task,

Bonus for:

git repository
live preview
use of some modern form library
proper validation handling (also errors from API responses)
TypeScript
good looking UI

After sending the solution, we kindly ask you to be patient. We will for sure get back to you.

Feel free to contact us if you have any questions!

Daniel Kowalczyk,
HexOcean sp. z.o.o.
