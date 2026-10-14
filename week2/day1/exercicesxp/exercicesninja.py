#exercice1
import os
import time


class GameOfLife:

  def __init__(self, width, height, initial_state=None):
    self.width = width
    self.height = height
    self.grid = [[0 for _ in range(width)] for _ in range(height)]

    if initial_state:
      for r, c in initial_state:
        if 0 <= r < height and 0 <= c < width:
          self.grid[r][c] = 1

  def display(self):
    for row in self.grid:
      print(" ".join("O" if cell == 1 else "." for cell in row))
    print("-" * (self.width * 2))

  def count_neighbors(self, r, c):
    count = 0
    for dr in [-1, 0, 1]:
      for dc in [-1, 0, 1]:
        if dr == 0 and dc == 0:
          continue
        nr, nc = r + dr, c + dc
        if 0 <= nr < self.height and 0 <= nc < self.width:
          count += self.grid[nr][nc]
    return count

  def step(self):
    new_grid = [[0 for _ in range(self.width)] for _ in range(self.height)]
    for r in range(self.height):
      for c in range(self.width):
        live_neighbors = self.count_neighbors(r, c)
        if self.grid[r][c] == 1:
          if live_neighbors in [2, 3]:
            new_grid[r][c] = 1
          else:
            new_grid[r][c] = 0
        else:
          if live_neighbors == 3:
            new_grid[r][c] = 1
          else:
            new_grid[r][c] = 0
    self.grid = new_grid

  def run(self, generations=10, delay=0.5):
    for gen in range(generations):
      print(f"Generation: {gen + 1}")
      self.display()
      self.step()
      time.sleep(delay)

blinker = [(2, 3), (2, 4), (2, 5)]

game = GameOfLife(width=10, height=10, initial_state=blinker)
