// implementing a trie

// each node of a trie must have a pointer to its children and 
// let us know if it is the end of the word
class TrieNode {
    constructor(value) {
        this.children = {};
        this.endOfWord = false;
        this.value = value;
    }

    markAsEnd() {
        this.endOfWord = true;
    }
}

// the class itself needs a dummy root node to which points the start each possible 
// word, since there are only 26 letters in the alphabet, there are only 26 possible pointers.
class Trie {
    constructor() {
        this.root = new TrieNode(0);
    }

    insert(word) {
        let prev = this.root;

        for (let i = 0; i < word.length; i++) {
            let w = word[i];
            if (prev.children[w]) {
                prev = prev.children[w];
            } else if (!prev.children[w] && i === word.length - 1) {
                let newLetter = new TrieNode(w);
                newLetter.markAsEnd();
                console.log(newLetter)
                prev.children[w] = newLetter;
                prev = prev.children[w];
            } else {
                let newLetter = new TrieNode(w);
                prev.children[w] = newLetter;
                prev = prev.children[w];
            };
        };

        return this.root.children[word[0]];
    }

    doesWordExist(word) {
        if (!this.root.children[word[0]]) return false;
        let prev = this.root.children[word[0]]

        let i = 1;
        while (i < word.length || prev.endOfWord === true) {

        }

        return true;
    }
}

let palindrome = new Trie();
palindrome.insert('jose')
console.log(palindrome.root.children)