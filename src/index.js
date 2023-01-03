module.exports = function toReadable (number) {

  let zero = 'zero';
  let one ='one';
  let two = 'two';
  let three = 'three';
  let four = 'four';
  let five = 'five';
  let six = 'six';
  let seven = 'seven';
  let eight = 'eight';
  let nine = 'nine';

  let ten = 'ten';
  let eleven = 'eleven';
  let twelve = 'twelve';
  let thirteen = 'thirteen'
  let fourteen = 'fourteen';
  let fifteen = 'fifteen';
  let sixteen = 'sixteen';
  let seventeen = 'seventeen';
  let eighteen = 'eighteen';
  let nineteen = 'nineteen';

  let twenty = 'twenty';
  let thirty = 'thirty';
  let forty = 'forty';
  let fifty = 'fifty';
  let sixty = 'sixty';
  let seventy = 'seventy';
  let eighty = 'eighty';
  let ninety = 'ninety';

  function toReadableOneNine (number) {
    let result = '';
    switch(number) {
      case 0:
        result = zero;
        break;
      case 1:
        result = one;
        break;
      case 2:
        result = two;
        break;
      case 3:
        result = three;
        break;
      case 4:
        result = four;
        break;
      case 5:
        result = five;
        break;
      case 6:
        result = six;
        break;
      case 7:
        result = seven;
        break;
      case 8:
        result = eight;
        break;
      case 9:
        result = nine;
        break;
    }
    return result;
  }

  function toReadableTenNineteen (number) {
    let result = '';
    switch(number) {
      case 10:
        result = ten;
        break;
      case 11:
        result = eleven;
        break;
      case 12:
        result = twelve;
        break;
      case 13:
        result = thirteen;
        break;
      case 14:
        result = fourteen;
        break;
      case 15:
        result = fifteen;
        break;
      case 16:
        result = sixteen;
        break;
      case 17:
        result = seventeen;
        break;
      case 18:
        result = eighteen;
        break;
      case 19:
        result = nineteen;
        break;
    }
    return result;
  }

  function toReadableTwentyNinety (number) {
    let result = '';
    switch(number) {
      case 2:
        result = twenty;
        break;
      case 3:
        result = thirty;
        break;
      case 4:
        result = forty;
        break;
      case 5:
        result = fifty;
        break;
      case 6:
        result = sixty;
        break;
      case 7:
        result = seventy;
        break;
      case 8:
        result = eighty;
        break;
      case 9:
        result = ninety;
        break;
    }
    return result;
  }

  function toReadableTenNineteenNine (number) {

    if (String(number).length === 2 && String(number)[0] === '1') {
      return toReadableTenNineteen(number);
    }
  
    else if (String(number).length === 2 && String(number)[1] === '0') {
      return toReadableTwentyNinety(+String(number)[0]);
    }
  
    else if (String(number).length === 2) {
      return toReadableTwentyNinety(+String(number)[0]) + ' ' + toReadableOneNine(+String(number)[1]);
    }
  }

  function toReadableOneNineteenNine (number) {
    if (String(number).length === 1) {
      return toReadableOneNine(number);
    }
    else if (String(number).length === 2) {
      return toReadableTenNineteenNine(number);
    }
  }

  if (number < 100) {
    return toReadableOneNineteenNine (number);
  }
  
  else if (String(number).length === 3 && String(number).slice(1) === '00') {
    return toReadableOneNine (+String(number)[0]) + ' hundred';
  }

  else if (String(number).length === 3) {
    return toReadableOneNine (+String(number)[0]) + ' hundred ' + toReadableOneNineteenNine (+String(number).slice(1));
  }

}
