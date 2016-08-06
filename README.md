# three-es6-s3-boilerplate
Just like the repo title says: ThreeJS with ES6 to S3 bucket boilerplate project using Webpack

Live Demo: https://mikatalk.github.io/three-es6-s3-boilerplate/

### Install/Setup
`npm install`

`npm run build`

### Dev
`npm run dev`

### Release to S3
Create a file `aws.private.json` containing you AWS credentials. For example:

`{
"accessKeyId": "ABCDEFGHIJKL",
"secretAccessKey": "abcd12345efghjkl+yolo"
}`

Then run:
`npm run release`
