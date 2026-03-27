/**
 * 🚀 Indian Startup Incubator - Capstone: OOP + Async + this
 *
 * Indian startup incubator ka full management system banana hai! Yeh
 * CAPSTONE challenge hai jisme saare concepts combine honge — classes,
 * private fields, async/await, Promise.allSettled, iterators, static
 * methods, aur `this` keyword. Startups ko admit karo, mentors assign
 * karo, demo day conduct karo — sab kuch ek system mein!
 *
 * Class: Startup
 *
 *   Private Fields:
 *     #funding - Total funding raised (starts at 0)
 *
 *   constructor(name, founder, domain)
 *     - this.name = name
 *     - this.founder = founder
 *     - this.domain = domain (must be one of: "fintech", "edtech", "healthtech", "foodtech")
 *     - this.#funding = 0
 *     - this.founded = new Date().toISOString()
 *     - If domain invalid, throw Error("Invalid domain! Choose from: fintech, edtech, healthtech, foodtech")
 *
 *   get funding()
 *     - Returns current #funding amount
 *
 *   raiseFunding(amount)
 *     - amount must be > 0, otherwise return -1
 *     - Adds amount to #funding
 *     - Returns new total #funding
 *
 *   getPitch()
 *     - Returns formatted pitch string using `this`:
 *       "${this.name} by ${this.founder} | Domain: ${this.domain} | Funding: Rs.${this.funding}"
 *
 *
 * Class: Incubator
 *
 *   Private Fields:
 *     #startups - Array of startup objects with metadata
 *     #mentors  - Array of mentor assignments
 *
 *   constructor(name, maxStartups)
 *     - this.name = name
 *     - this.maxStartups = maxStartups (must be > 0)
 *     - this.#startups = []
 *     - this.#mentors = []
 *
 *   async admitStartup(startup)
 *     - Returns a Promise (simulate async admission process with small delay)
 *     - Validates: startup must be an instance of Startup (use instanceof)
 *     - If not Startup instance: reject/throw Error("Invalid startup!")
 *     - If already admitted (check by name): reject/throw Error("Startup already admitted!")
 *     - If at capacity (#startups.length >= maxStartups): reject/throw Error("Incubator full!")
 *     - If valid: push { startup, admittedAt: new Date().toISOString(), demoCompleted: false }
 *     - Returns { success: true, message: "${startup.name} admitted to ${this.name}!" }
 *
 *   removeStartup(name)
 *     - Removes startup by name from #startups
 *     - Returns true if found and removed
 *     - Returns false if not found
 *
 *   async assignMentor(startupName, mentor)
 *     - Returns a Promise (simulate async process)
 *     - mentor is { name, expertise } object
 *     - Validates startup exists in #startups
 *     - If startup not found: reject/throw Error("Startup not found!")
 *     - If valid: push { startupName, mentor, assignedAt: new Date().toISOString() }
 *       to #mentors
 *     - Returns { success: true, message: "${mentor.name} assigned to ${startupName}" }
 *
 *   async conductDemo(startupName)
 *     - Returns a Promise (simulate demo day with delay)
 *     - Validates startup exists
 *     - If not found: reject/throw Error("Startup not found!")
 *     - Marks demoCompleted = true for the startup
 *     - Returns {
 *         startup: startupName,
 *         score: Math.floor(Math.random() * 41) + 60,  // 60-100
 *         feedback: random from ["Bahut badhiya!", "Accha hai, improve karo", "Investors impressed!"],
 *         timestamp: new Date().toISOString()
 *       }
 *
 *   async batchProcess(startups)
 *     - Takes array of Startup instances
 *     - Admits EACH startup using admitStartup
 *     - Uses Promise.allSettled so that individual failures don't stop others
 *     - Returns array of results: each { status: "fulfilled", value } or { status: "rejected", reason }
 *
 *   getStartupsByDomain(domain)
 *     - Returns array of startups filtered by domain
 *     - Returns the Startup instances (not the wrapper objects)
 *     - Returns empty array if no matches
 *
 *   getTopFunded(n)
 *     - Returns top n startups sorted by funding (highest first)
 *     - Returns the Startup instances
 *     - If n > total startups, return all sorted by funding
 *     - If n <= 0 or no startups, return empty array
 *
 *   [Symbol.iterator]()
 *     - Makes incubator iterable over its startups
 *     - Yields each Startup instance (not wrapper objects)
 *
 *   static createFromConfig(config)
 *     - Factory method: creates an Incubator from config object
 *     - config: { name, maxStartups }
 *     - Returns new Incubator(config.name, config.maxStartups)
 *     - If config invalid (missing name or maxStartups), throw Error("Invalid config!")
 *
 *
 * Function: runDemoDay(incubator)
 *   - async function (standalone, not a method)
 *   - Takes an Incubator instance
 *   - Conducts demo for ALL startups in the incubator (use iterator)
 *   - Collects results using Promise.allSettled
 *   - Returns {
 *       incubator: incubator.name,
 *       totalStartups: count,
 *       results: array of demo results,
 *       timestamp: new Date().toISOString()
 *     }
 *
 * Rules:
 *   - Startup must validate domain in constructor
 *   - Private fields must use # syntax
 *   - All async methods must return Promises
 *   - Use instanceof for type checking
 *   - Symbol.iterator must yield Startup instances
 *   - batchProcess must use Promise.allSettled
 *   - runDemoDay must work with the iterator
 *   - `this` must be used correctly in getPitch and all methods
 *   - Error messages must match exactly as specified
 *
 * @example
 *   const startup = new Startup("PayEasy", "Rahul", "fintech");
 *   startup.raiseFunding(5000000);
 *   startup.getPitch();
 *   // => "PayEasy by Rahul | Domain: fintech | Funding: Rs.5000000"
 *
 * @example
 *   const incubator = new Incubator("T-Hub", 10);
 *   const s1 = new Startup("EduLearn", "Priya", "edtech");
 *   await incubator.admitStartup(s1);
 *   // => { success: true, message: "EduLearn admitted to T-Hub!" }
 *
 * @example
 *   const incubator = Incubator.createFromConfig({ name: "Nexus", maxStartups: 5 });
 *   const startups = [
 *     new Startup("HealthFirst", "Amit", "healthtech"),
 *     new Startup("FoodDash", "Neha", "foodtech")
 *   ];
 *   const results = await incubator.batchProcess(startups);
 *   // => [{ status: "fulfilled", value: {...} }, { status: "fulfilled", value: {...} }]
 *
 * @example
 *   for (const startup of incubator) {
 *     console.log(startup.name);  // iterates over all admitted startups
 *   }
 *
 * @example
 *   const demoResults = await runDemoDay(incubator);
 *   // => { incubator: "T-Hub", totalStartups: 2, results: [...], timestamp: "..." }
 */
export class Startup {
  #funding;

  constructor(name, founder, domain) {
    const valid = ["fintech", "edtech", "healthtech", "foodtech"];
    if (!valid.includes(domain)) {
      throw new Error("Invalid domain! Choose from: fintech, edtech, healthtech, foodtech");
    }

    this.name = name;
    this.founder = founder;
    this.domain = domain;
    this.#funding = 0;
    this.founded = new Date().toISOString();
  }

  get funding() {
    return this.#funding;
  }

  raiseFunding(amount) {
    if (typeof amount !== "number" || amount <= 0) return -1;
    this.#funding += amount;
    return this.#funding;
  }

  getPitch() {
    return `${this.name} by ${this.founder} | Domain: ${this.domain} | Funding: Rs.${this.funding}`;
  }
}

export class Incubator {
  #startups;
  #mentors;

  constructor(name, maxStartups) {
    this.name = name;
    this.maxStartups = maxStartups > 0 ? maxStartups : 1;
    this.#startups = [];
    this.#mentors = [];
  }

  async admitStartup(startup) {
    await new Promise(res => setTimeout(res, 50));

    if (!(startup instanceof Startup)) {
      throw new Error("Invalid startup!");
    }

    for (let i = 0; i < this.#startups.length; i++) {
      if (this.#startups[i].startup.name === startup.name) {
        throw new Error("Startup already admitted!");
      }
    }

    if (this.#startups.length >= this.maxStartups) {
      throw new Error("Incubator full!");
    }

    this.#startups.push({
      startup,
      admittedAt: new Date().toISOString(),
      demoCompleted: false
    });

    return {
      success: true,
      message: `${startup.name} admitted to ${this.name}!`
    };
  }

  removeStartup(name) {
    for (let i = 0; i < this.#startups.length; i++) {
      if (this.#startups[i].startup.name === name) {
        this.#startups.splice(i, 1);
        return true;
      }
    }
    return false;
  }

  async assignMentor(startupName, mentor) {
    await new Promise(res => setTimeout(res, 50));

    let exists = false;

    for (let i = 0; i < this.#startups.length; i++) {
      if (this.#startups[i].startup.name === startupName) {
        exists = true;
        break;
      }
    }

    if (!exists) {
      throw new Error("Startup not found!");
    }

    this.#mentors.push({
      startupName,
      mentor,
      assignedAt: new Date().toISOString()
    });

    return {
      success: true,
      message: `${mentor.name} assigned to ${startupName}`
    };
  }

  async conductDemo(startupName) {
    await new Promise(res => setTimeout(res, 50));

    let entry = null;

    for (let i = 0; i < this.#startups.length; i++) {
      if (this.#startups[i].startup.name === startupName) {
        entry = this.#startups[i];
        break;
      }
    }

    if (!entry) {
      throw new Error("Startup not found!");
    }

    entry.demoCompleted = true;

    const feedbacks = [
      "Bahut badhiya!",
      "Accha hai, improve karo",
      "Investors impressed!"
    ];

    return {
      startup: startupName,
      score: Math.floor(Math.random() * 41) + 60,
      feedback: feedbacks[Math.floor(Math.random() * feedbacks.length)],
      timestamp: new Date().toISOString()
    };
  }

  async batchProcess(startups) {
    const tasks = [];

    for (let i = 0; i < startups.length; i++) {
      tasks.push(this.admitStartup(startups[i]));
    }

    return Promise.allSettled(tasks);
  }

  getStartupsByDomain(domain) {
    const result = [];

    for (let i = 0; i < this.#startups.length; i++) {
      if (this.#startups[i].startup.domain === domain) {
        result.push(this.#startups[i].startup);
      }
    }

    return result;
  }

  getTopFunded(n) {
    if (n <= 0 || this.#startups.length === 0) return [];

    const arr = [];

    for (let i = 0; i < this.#startups.length; i++) {
      arr.push(this.#startups[i].startup);
    }

    arr.sort((a, b) => b.funding - a.funding);

    if (n > arr.length) return arr;

    return arr.slice(0, n);
  }

  [Symbol.iterator]() {
    let index = 0;
    const data = this.#startups;

    return {
      next() {
        if (index < data.length) {
          return { value: data[index++].startup, done: false };
        }
        return { done: true };
      }
    };
  }

  static createFromConfig(config) {
    if (!config || !config.name || !config.maxStartups) {
      throw new Error("Invalid config!");
    }

    return new Incubator(config.name, config.maxStartups);
  }
}

export async function runDemoDay(incubator) {
  const tasks = [];

  for (const startup of incubator) {
    tasks.push(incubator.conductDemo(startup.name));
  }

  const results = await Promise.allSettled(tasks);

  let count = 0;
  for (const _ of incubator) {
    count++;
  }

  return {
    incubator: incubator.name,
    totalStartups: count,
    results,
    timestamp: new Date().toISOString()
  };
}