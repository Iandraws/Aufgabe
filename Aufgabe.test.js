const convertTextToNumbers=require('./Aufgabe')


test("The function should return 60 for the Name Ibrahim ignoring any spaces", () => {
    expect(convertTextToNumbers("Ibrahim")).toBe(60);
  });
  
  
  test("should return 0 for only spaces", () => {
    expect(convertTextToNumbers("     ")).toBe(0);
  });
  
  test("should return 0 for only commas", () => {
    expect(convertTextToNumbers(",,,,,")).toBe(0);
  });
  
  test("should return same number if capital or small", () => {
    expect(convertTextToNumbers("EXAMPLE")).toBe(convertTextToNumbers("example"));
  });

  test("should return 46 if name Ivan", () => {
    expect(convertTextToNumbers("Ivan")).toBe(46);
  });
  test("should return zero unknown english words", () => {
    expect(convertTextToNumbers("привет")).toBe(0);
  });
  