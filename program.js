process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function() {
    // tutaj treść tego co ma się wykonać w momencie odczytania wejścia.
   	var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.toString().trim();
        switch (instruction) {
            case '/exit':
                process.stdout.write('Quitting app!\n');
                process.exit();
            break;
            case 'version':
                process.stdout.write(process.version + '\n');
            break;
            default:
                process.stderr.write('Wrong instruction!' + '\n');

        }
    }
});
