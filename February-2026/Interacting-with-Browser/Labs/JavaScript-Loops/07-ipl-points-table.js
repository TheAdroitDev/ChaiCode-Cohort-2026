/**
 * 🏆 IPL Season Points Table
 *
 * IPL ka season chal raha hai aur tujhe points table banana hai!
 * Tujhe match results ka array milega, aur tujhe har team ke points
 * calculate karke sorted table return karna hai.
 *
 * Match result types:
 *   - "win": Winning team gets 2 points, losing team gets 0
 *   - "tie": Both teams get 1 point each
 *   - "no_result": Both teams get 1 point each (rain/bad light)
 *
 * Each match object: { team1: "CSK", team2: "MI", result: "win", winner: "CSK" }
 *   - For "tie" and "no_result", the winner field is absent or ignored
 *
 * Rules (use for loop with object accumulator):
 *   - Loop through matches array
 *   - Build an object accumulator: { "CSK": { team, played, won, lost, tied, noResult, points }, ... }
 *   - After processing all matches, convert to array and sort:
 *     1. By points DESCENDING
 *     2. If points are equal, by team name ASCENDING (alphabetical)
 *
 * Validation:
 *   - Agar matches array nahi hai ya empty hai, return []
 *
 * @param {Array<{team1: string, team2: string, result: string, winner?: string}>} matches
 * @returns {Array<{team: string, played: number, won: number, lost: number, tied: number, noResult: number, points: number}>}
 *
 * @example
 *   iplPointsTable([
 *     { team1: "CSK", team2: "MI", result: "win", winner: "CSK" },
 *     { team1: "RCB", team2: "CSK", result: "tie" },
 *   ])
 *   // CSK: played=2, won=1, tied=1, points=3
 *   // MI: played=1, won=0, lost=1, points=0
 *   // RCB: played=1, tied=1, points=1
 *   // Sorted: CSK(3), RCB(1), MI(0)
 */
export function iplPointsTable(matches) {
  // Validation
  if (!Array.isArray(matches) || matches.length === 0) {
    return [];
  }

  // Object accumulator to track team stats
  const teamsData = {};

  // Loop through matches and build accumulator
  for (let i = 0; i < matches.length; i++) {
    const match = matches[i];
    const { team1, team2, result, winner } = match;

    // Initialize team data if not exists
    if (!(team1 in teamsData)) {
      teamsData[team1] = { team: team1, played: 0, won: 0, lost: 0, tied: 0, noResult: 0, points: 0 };
    }
    if (!(team2 in teamsData)) {
      teamsData[team2] = { team: team2, played: 0, won: 0, lost: 0, tied: 0, noResult: 0, points: 0 };
    }

    // Update played count
    teamsData[team1].played++;
    teamsData[team2].played++;

    // Process based on result type
    if (result === 'win') {
      // One team wins, one loses
      if (winner === team1) {
        teamsData[team1].won++;
        teamsData[team1].points += 2;
        teamsData[team2].lost++;
      } else if (winner === team2) {
        teamsData[team2].won++;
        teamsData[team2].points += 2;
        teamsData[team1].lost++;
      }
    } else if (result === 'tie') {
      // Both teams get 1 point
      teamsData[team1].tied++;
      teamsData[team1].points += 1;
      teamsData[team2].tied++;
      teamsData[team2].points += 1;
    } else if (result === 'no_result') {
      // Both teams get 1 point for no result
      teamsData[team1].noResult++;
      teamsData[team1].points += 1;
      teamsData[team2].noResult++;
      teamsData[team2].points += 1;
    }
  }

  // Convert to array and sort
  const table = Object.values(teamsData);
  
  table.sort((a, b) => {
    // Sort by points DESCENDING
    if (a.points !== b.points) {
      return b.points - a.points;
    }
    // If points are equal, sort by team name ASCENDING
    return a.team.localeCompare(b.team);
  });

  return table;
}
