## DOM (Document object model)

Events- onClick  , alert ,


## onclick example.

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dom</title>
</head>
<body>
    <button onclick=myFunction()>Like </button>
</body>
</html>
<script>
    let count=0;
function myFunction(){
    count++
    console.log("like me",count, "times");
}
</script>

## -----------------------------------
## alert example
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dom</title>
</head>
<body>
    <button onclick=myFunction()>Like </button>
</body>
</html>
<script>
    let count=0;
function myFunction(){
    count++
    // console.log("like me",count, "times");
    alert("some like you")
}

</script>



