// @strict: true
// @lib: esnext, dom
// @noEmit: true

export {}

interface Serializer {
  set value(v: string | number | boolean);
  get value(): string;
}
declare let box: Serializer;
const v = box['value']
box['value'] = true;
box['value'] = 42;
box['value'] = "hello";

interface Element {
    get style(): CSSStyleDeclaration;
    set style(cssText: string);
}

declare const element: Element;
element['style'] = "color: red";
element['style'] = element.style;

class One {
  get prop1(): string {
    return "";
  }
  set prop1(s: string | number) {}

  get prop2(): string {
    return "";
  }
  set prop2(s: string | number) {}

  prop3: number = 42;

  get prop4(): string {
    return "";
  }
  set prop4(s: string | number) {}
}

class Two {
  get prop1(): string {
    return "";
  }
  set prop1(s: string | number) {}

  get prop2(): string {
    return "";
  }
  set prop2(s: string) {}

  get prop3(): string {
    return "";
  }
  set prop3(s: string | boolean) {}

  get prop4(): string {
    return "";
  }
  set prop4(s: string | boolean) {}
}

declare const u1: One | Two;

u1['prop1'] = 42;
u1['prop1'] = "hello";

u1['prop2'] = 42;
u1['prop2'] = "hello";

u1['prop3'] = 42;
u1['prop3'] = "hello";
u1['prop3'] = true;

u1['prop4'] = 42;
u1['prop4'] = "hello";
u1['prop4'] = true;

declare const i: One & Two;

const iv1 = i['prop1'];
i['prop1'] = 42;
i['prop1'] = "hello";

const iv2 = i['prop2'];
i['prop2'] = 42;
i['prop2'] = "hello";

class Three {
  get prop1(): string {
    return "";
  }
  set prop1(s: string | number) {}

  prop2: number = 42;
}

class Four {
  get prop1(): "hello" {
    return "hello";
  }
  set prop1(s: "hello" | number) {}

  get prop2(): string {
    return "";
  }
  set prop2(s: string | 42) {}
}

class Five {
  get prop1(): "hello" {
    return "hello";
  }
  set prop1(s: "hello" | boolean) {}

  get prop2(): string {
    return "";
  }
  set prop2(s: string | number | boolean) {}
}

declare const i2: Three & Four & Five;

i2['prop1'] = 42;
i2['prop1'] = "hello";

i2['prop2'] = 42;
i2['prop2'] = "hello";

class Six {
  get prop1(): boolean | number {
    return 42;
  }
  set prop1(s: boolean | string) {}

  get prop2(): bigint | number {
    return 10;
  }
  set prop2(s: boolean | null) {}
}

declare const s1: Six
declare const k1: 'prop1' | 'prop2'

const sv1 = s1[k1]
s1[k1] = 42
s1[k1] = true
s1[k1] = ''
s1[k1] = null
