const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  
  constructor(mod = true) {
    this.mod = mod;
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');

    let encode = '';
    let en = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    message = message.toUpperCase();
    key = key.toUpperCase();
    
    while (key.length < message.length)
      key += key;
    key = key.slice(0,message.length);

    let pos = 0;
    for (let i=0; i<message.length; i++)
      if (en.includes(message[i])) {
        let s = message.charCodeAt(i) + key.charCodeAt(pos) - 65;
        if (s > 90)
          s += -26;
        encode += String.fromCharCode(s);
        pos++;
      }
      else
        encode += message[i];
    
    return this.mod ? encode : encode.split('').reverse().join('');
  }

  decrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');

    let decode = '';
    let en = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    message = message.toUpperCase();
    key = key.toUpperCase();
    
    while (key.length < message.length)
      key += key;
    key = key.slice(0,message.length);

    let pos = 0;
    for (let i=0; i<message.length; i++)
      if (en.includes(message[i])) {
        let s = message.charCodeAt(i) - key.charCodeAt(pos) + 65;
        if (s < 65)
          s += 26;
        decode += String.fromCharCode(s);
        pos++;
      }
      else
        decode += message[i];
    
    return this.mod ? decode : decode.split('').reverse().join('');    
  }
}

module.exports = {
  VigenereCipheringMachine
};
