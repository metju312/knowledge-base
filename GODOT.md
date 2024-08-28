# Must learn
* Shooter 2:32:00

---

# GDScript

---

### `Code`

* `@export var pipe_scene : PackedScene` - pozwala na instantowanie konkretnej sceny w innej scenie poprzez: `var pipe = pipe_scene.instantiate()`
* `Array`


    var pipes: Array
    pipes.clear()
    for pipe in pipes:
      pipe.position.x -= SCROLL_SPEED
    add_child(pipe) // dodaje Scenę do sceny?
    var pipe = pipe_scene.instantiate()
    pipes.append(pipe)


    var test_array: Array[String] = ['a', 'b']
* `target other nodes`
  * `get_node("node path")`
  * `$node path`
  * `Unique Name`
    * right click on node
    * click `Access as Unique Name`
    * `%node path`
  * `$".."` - parent node
* 
* `move node`
  * `position = Vector2(100, 200)`
* `rotate node`
  * `rotation_degrees = 45`
* `delta`
  * `1s/60 frames = 0.0167` ~17 ms
* `inputs`
  * `Input.is_action_pressed("left")`

### instantiate(): PackedScene
    var laser_scene: PackedScene = preload("res://scenes/projectiles/laser.tscn")
    var laser = laser_scene.instantiate()
    laser.position = pos
    add_child(laser) 

### get_children(): ArrayOfChildrenNodes
    var laser_markers = $LaserStartPositions.get_children()
    var selected_laser = laser_markers[randi() % laser_markers.size()]
    laser.emit(selected_laser.global_position)

### `Life cycle`
* `func _ready():` - uruchamiana raz na początku
* `func _physics_process(delta):` - pętla uruchamiana w dokładnie takich samych momentach na każdym komputerze - do obsługi fizyki

---

`Komunikacja pomiędzy Nodami`
* 



---

# Nodes

* `Area2D` - ma sygnał body.enter używane np do kolizji
* `CollisionShape2D` - zawsze przy kolizjach
* `AnimatedSprite2D`
*   do animacji 2D
  * można przeciągać kilka plików tworzących 1 animację
  * można użyć 1 pliku z kilkoma obrazkami i wycinać animacje
  * można umieszczać wiele animacji w 1 pliku
* `Sprite2D` - statyczne obrazji - bez animacji
* `Area2D`
  * check if another body entered
  * can be moved
  * e.g. player entered a house, laser
* `StaticBody2D`
  * others collide with it
  * not supposed to be moved
  * e.g. walls, obstacles
* `RigidBody2D`
  * set velocity
  * e.g. granade
* `CharacterBody2D`
  * dla poruszających się postaci i wrogów
  * player e.g. all enemies
  * for movement use `move_and_slide()` and `velocity` not possition
* `Marker2D`
  * node posiadający tylko lokalizację (position i global_position(tego używać))
---

# Project > Project Settings

### `Inputs`
* Input Map > Actions

---