import pygame
import sys

# Initialize Pygame
pygame.init()

# Screen Dimensions
WIDTH, HEIGHT = 800, 600

# Colors (R, G, B)
WHITE = (255, 255, 255)
RED = (255, 0, 0)
GREEN = (0, 255, 0)
BLUE = (0, 0, 255)

# Create the screen
screen = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption("Simple Pygame Example")

# Clock to control frame rate
clock = pygame.time.Clock()

# Rectangle settings
rect_x, rect_y = 100, 100
rect_width, rect_height = 50, 50
rect_color = RED
rect_speed = 5

# Game Loop
running = True
while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:  # Quit when the window is closed
            running = False
            pygame.quit()
            sys.exit()

        if event.type == pygame.KEYDOWN:  # Change color on key press
            if event.key == pygame.K_r:
                rect_color = RED
            elif event.key == pygame.K_g:
                rect_color = GREEN
            elif event.key == pygame.K_b:
                rect_color = BLUE

    # Get keys for movement
    keys = pygame.key.get_pressed()
    if keys[pygame.K_UP]:
        rect_y -= rect_speed
    if keys[pygame.K_DOWN]:
        rect_y += rect_speed
    if keys[pygame.K_LEFT]:
        rect_x -= rect_speed
    if keys[pygame.K_RIGHT]:
        rect_x += rect_speed

    # Fill screen with white
    screen.fill(WHITE)

    # Draw the rectangle
    pygame.draw.rect(screen, rect_color, (rect_x, rect_y, rect_width, rect_height))

    # Update the display
    pygame.display.flip()

    # Limit frame rate
    clock.tick(30)
