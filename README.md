# The-Cloud-Resume-Challenge-AWS

## 05/10/2024
I've been at work trying to recreate my resume in HTML form, and I can confidently say that my Header is complete.

Also went ahead and threw in the Technical skills section of the resume, looking good so far!

## 05/14/2024
4:20pm - I am back at it and I worked on the Relevant Projects portion of my front-end, soon the front end will be complete.

4:40pm - I also realized I can finish everything else on the same react component... Probably not the best practice shown, but it got the job done in a shorter amount of time.
4:45pm - I am now going to deploy as a static website on Amazon S3.
5:00pm - I realized that I have made a mistake... I tried uploading the entire folder into S3 but it looks like the upload time was 2 days so I stopped.

5:15pm - Brain fart detected... :D Needed to create a production build. And now the build is uploaded.

## 05/15/2024

4:15pm - Resuming my work from yesterday, deployed the static page, now I am going to use CloudFront to get https protection.

## 05/16/2024

7:10pm - Made a few quick color changes to make it easier on the eye like making the background eggshell and darkening the empty space. Also cleaned up "missing key" errors.

## 05/30/2024
4:20pm - Few mistakes that I am realizing, my naming of my s3 bucket was wrong, so I had to make a new bucket, fill it with the same content, and create the record for my hosted zone. It is now accessable by going to [text](https://s3.joshlaocloudresume.com/)

4:35pm - I've now made my website secure with HTTPS with CloudFront.


# CHUNK 1 DONE:
## Here are some reflection questions that I am going to answer

What aspect of Chunk 1's work did you find the most difficult?

One problem I ran into was knowing what steps I had to do first to get HTTPS on my s3 bucket.
I overcame this by:
Watching youtube videos on CloudFront, and Route 53.

Another problem was getting my domain. The way that Route 53 had me register domains did not work for me.
I overcame this by:
Using GoDaddy to register a domain and configure the DNS later on.
Watching videos on how to use that domain for my S3 Bucket.

What's something you'd have done differently, or added, if you'd had more time?
I think the way I put together my S3 bucket was okay, but I would definately want to impliment some CI/CD into it.
In fact, I will do that now...

4:30pm - I am going to do the DevOps mod for this which is basically Continuous Deployment(CD)
I've done step 1 already from the beginning which was create a github repo for this project.
I need to do step 2 which is to convert my S3, Route 53, and CloudFront resources to infrastructure-as-code (IaC).

Fixed up some variables and now I am ready to try again.