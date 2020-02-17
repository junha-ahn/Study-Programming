function gcd(n, m) {
    return !m ? n : gcd(m, n % m);
  }
  function lcm(n, m) {
    return (n * m) / gcd(n, m);
  }
  console.log(gcd(12, 18));
  console.log(lcm(12, 18));