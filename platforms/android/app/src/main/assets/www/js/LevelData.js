class LevelData {
  static initLevelData() {
    return {
      score: 0,
      gameOver: false,
      ENEMY_SPAWN_RATE: 2000,
      MAX_ENEMY_COUNT: 10,
      ENEMY_SPD: 14,
      startTime: 0,
      disableShot:0,
      lives: 3,
      enemySpdMultiplier: 1,
      forcefield: null,
      LR_MIN_SPD: 40,
      difficultyStr: "",
      difficulty: undefined,
      levelId: null,
      targetKills: null,
      targetTime: null,
      killCount: 0,
      perfect: true,
      complete: 0
    }
  }
}

export default LevelData;