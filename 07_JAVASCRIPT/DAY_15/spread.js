function processArguments(...args)
{
    if(args.length==0)
        {
            // No arguments passed
            console.log(`No arguments provided`);
        }
    else if(args.length==1)
        {
            // SIngle arguments passed
            console.log(`One arguments: ${args[0]}`);
        }
    else
        {
            // Multiple arguments passed
            console.log(`Multiple arguments: ${args}`);
        }
}
// usage examples
processArguments();//No Arguments
processArguments(10);//One Argument
processArguments('apple','banana','mango');//Multiple Arguments