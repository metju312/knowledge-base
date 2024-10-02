# Must learn
* Shooter 6:08 animation player

---

# GDScript

---

### Arrays


    var pipes: Array
    pipes.clear()
    for pipe in pipes:
      pipe.position.x -= SCROLL_SPEED
    add_child(pipe) // dodaje Scenę do sceny?
    var pipe = pipe_scene.instantiate()
    pipes.append(pipe)

    var test_array: Array[String] = ['a', 'b']
### Target other nodes
  * `get_node("node path")`
  * `$node path`
  * `Unique Name`
    * right click on node
    * click `Access as Unique Name`
    * `%node path`
  * `$".."` - parent node

### Move and rotate
  * `position = Vector2(100, 200)`
  * `rotation_degrees = 45`
  * `position` - relative to parent
  * `global_position` - relative to (0,0) point. independent of any parents
  * `look_at(get_global_mouse_position())` - rotate player to look at mouse
  * `var player_direction = (get_global_mouse_position() - position).normalized()` - get player look at ditection
  * `laser.rotation_degrees = rad_to_deg(player_direction.angle()) + 90` - 90 bacause sprite is rotating at the begining to up not right
### delta
  * `1s/60 frames = 0.0167` ~17 ms
### inputs
  * `Input.is_action_pressed("left")`

### instantiate(): PackedScene
    var laser_scene: PackedScene = preload("res://scenes/projectiles/laser.tscn")
    var laser = laser_scene.instantiate()
    laser.position = pos
    add_child(laser)
    or: $Projectiles.add_child(laser)

* `@export var pipe_scene : PackedScene` - pozwala na instantowanie konkretnej sceny w innej scenie poprzez: `var pipe = pipe_scene.instantiate()`

### get_children(): ArrayOfChildrenNodes
    var laser_markers = $LaserStartPositions.get_children()
    var selected_laser = laser_markers[randi() % laser_markers.size()]
    laser.emit(selected_laser.global_position)

### Life cycle functions
* `func _ready():` - uruchamiana raz na początku
* `func _physics_process(delta):` - pętla uruchamiana w dokładnie takich samych momentach na każdym komputerze - do obsługi fizyki

---

`Komunikacja pomiędzy Nodami`
* 



---

# Nodes

* `Area2D` - ma sygnał body.enter używane np do kolizji
* `CollisionShape2D` - zawsze przy kolizjach
  * `Layer & Mask`
    * `Layer` - determines on which layers the object itself is. E.g. Player is in layer `Player
    * `Mask` - determines which layers it can interact with. E.g. Player can interacjt with other players, zones, projectiles, objects... so multiple layers
* `AnimatedSprite2D`
*   do animacji 2D
  * można przeciągać kilka plików tworzących 1 animację
  * można użyć 1 pliku z kilkoma obrazkami i wycinać animacje
  * można umieszczać wiele animacji w 1 pliku
* `Sprite2D`
  * statyczne obrazji - bez animacji
  * zapętlanie tekstur:
    * `Region` > `Enabled` > `On`
    * `Region` > `Edit Region`
    * zaznaczyć dużo większy prostokąt
    * `Texture` > `Repeat` > `Enable` - powtarza teksturę
  * zmiana koloru
    * `Visibility` > `Modulate`(change color of childrens too) / `Selft Modulate`
* `Area2D`
  * check if another body entered
  * can be moved
  * e.g. player entered a house, laser
* `StaticBody2D`
  * others collide with it
  * not supposed to be moved
  * e.g. walls, obstacles
### RigidBody2D
  * set velocity, better: `linear_velocity`
  * e.g. granade


    var grenade = grenade_scene.instantiate() as RigidBody2D
    grenade.linear_velocity = Vector2.UP * 100

* `CharacterBody2D`
  * dla poruszających się postaci i wrogów
  * player e.g. all enemies
  * for movement use `move_and_slide()` and `velocity` not possition
* `Marker2D`
  * node posiadający tylko lokalizację (position i global_position(tego używać))
* `Camera2D`
  * must be child of moving object
  * better not do add to scene e.g. player but add to level node e.g. player
---


# Tilemap


---
### Tileset
* `tile` - sigle graphic
* `tileset` - combination of tiles
* `tilemap` - a godot node that organizes tilesets

### Multiple Tiles in one Tileset/TileMap
* drag and drop two graphics to TileSet tab
* Name it in Setup tab
* Add Layers in TileMap Inspector tab
* Order layers
* Then drawing tiles select proper layer
---

### Add physics layer
* Scene > Click on your Tilemap > Click on TileSet > Physics Layers
  * Select `Collision Layer` e.g. Objects and `Collision Mask` e.g. player, enemies, projectiles
* Go to bottom TileSet Tab
  * Paint
    * Physics Layer 0
    * Click on tile and add/move poits
    * 
---

### Particles
* `GPUParticles2D` Node for e.g PC
* `CPUParticles2D` Node for e.g. web
* Process Material
  * Spawn
    * Position
    * Angle
    * Velocity (speed)
* In code:
  * `$GPUParticles2D.emitting = true`

### Lights
* `PointLight` - light from a point source (firecamp, flashlight)
  * Texture - must have
  * Texture Scale - range of light
  * Energy - power of light
  * Color
* `DirectionalLight` - light from a direction (sun) 
* `LightOccluder` - collision for light
  * Draw polygon when light from the (0,0) point will be stoped
  * Enable shadows from PointLight!
  * Modify shadow e.g. color
  * add shadow filter
  * Add occluder to TileMap e.g. walls:
    * Select TileSet
    * Rendering
    * Occlusion Layer
    * TileSet bottom tab
      * Pain Occlusion Layer 0

### Animations
* Seperate images > AnimatedSprite2D Node
* Spritesheet: Sprite2D Node - it has ana animation tab

### AnimationPlayer 
* To animate 2D sprite
  * Add track
  * Property Track...
  * Sprite 2D
  * Click key on `Sprite2D::Animation::frame` property
* To destroy object
  * Add track
  * Call Method Track...
  * Root object
  * queue_free()
* To hide sprite
  * Add track
  * Property Track...
  * Sprite 2D
  * Click key visible
  * Add 2 keys on track
  * change value of second key
* To transparently hide
  * Add track
  * Property Track...
  * Explosion / Sprite
  * Click key modulate
  * Add 2 keys on track
  * change value of second key
  * Option: change graph on the right panel of track

### Tweens
* 

---
# Project > Project Settings

### Inputs
* Input Map > Actions

---

### `Window size`
* General > Display > Window > Size > Viewport With/Height

### Layers names
* General > Layer Names > 2D Physics 


### Shortcuts
* Ctrl + Shift + o then write scene you want to open