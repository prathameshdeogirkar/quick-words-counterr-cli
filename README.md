# quick-words-counterr-cli

`quick-words-counterr-cli` is a simple and efficient command-line tool that counts words in text files, providing word frequency analysis. 

## Installation

To install the package globally using npm, run:

```bash
npm install -g quick-words-counterr-cli
```

## Usage

After installation, you can use the CLI to count words in any text file. To do so, run the following command in your terminal:

```bash
word-counter <path-to-text-file>
```

For example:

```bash
word-counter ./example.txt
```

## Options

You can also count specific words by adding an optional argument:

```bash
word-counter ./example.txt "specificWord"
```

If no word is specified, the CLI will count and display all words in the file.

## Features

- **Word frequency analysis**: Provides a count of each unique word in the file.
- **Case-sensitive**: Differentiates between words like "The" and "the."
- **Specify word**: Allows counting of a specific word if needed.

## Example Output

```bash
{
  the: 10,
  quick: 5,
  brown: 2,
  fox: 1
}
```

