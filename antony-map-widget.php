<?php
/**
 * Plugin Name:   Antony map
 * Description:   Adds an widget that displays a map with links to Antony's shops location by mesoregions in SP state.
 * Version:       1.0
 * Author:        JAAF
 * Author URI:    https://jaaf.negocio.site
 */
if ( ! defined( 'AMP_SVG_PATH' ) ) define( 'AMP_SVG_PATH', plugins_url( '', __FILE__ ).'/images/sp_regions.svg' );

class jpen_Antony_Map extends WP_Widget {
    
    
    // Set up the widget name and description.
    public function __construct() {
        $widget_options = array( 'classname' => 'antony_map_widget', 'description' => 'This is the Antony Map Widget' );
        parent::__construct( 'antony_map_widget', 'Antony Map Widget', $widget_options );
    }
    
    
    // Create the widget output.
    public function widget( $args, $instance ) {
        $title = apply_filters( 'widget_title', $instance[ 'title' ] );
        $show_title = $instance[ 'show_title' ];
        
        echo $args['before_widget'];
        if (!empty($show_title)) echo $args['before_title'] . $title . $args['after_title'];
        echo '<div class="container py-3">';
        echo '<div class="row"><div id="antony-map" class="col-md-2">';
        echo '<h2 class="text-uppercase">Nossas franquias</h2>';
        echo '<p class="text-nowrap float-left w-100">';
        echo 'Mais de 10 lojas no estado<br/> de São Paulo';
        echo '</p></div>';
        echo '<div id="antony-map" class="col-md-6">';
        $arrContextOptions=array(
            "ssl"=>array(
                "verify_peer"=>false,
                "verify_peer_name"=>false,
            ),
        );  
        echo file_get_contents(AMP_SVG_PATH, false, stream_context_create($arrContextOptions));
        echo '</div><div id="map-info" class="col-md-4">';
        ?>
        <h3>Selecione uma regi&atilde;o</h3>
        <div class="wrap-list-location main d-none" >
        	<div class="selected">
        		<span class="region-name"></span>
        		<span class="btn-remove btn-new-search">x</span>
        	</div>
        
        	<div class="list-location">
        		
        	</div>
        </div>
        <?php 
        echo '</div></div></div>';
        echo $args['after_widget'];
        ?>
        <div class="tooltip-map" style="position: fixed; display: none; text-align: center;">
        	<span class="tooltip-map-region"></span><br>
        	<span class="tooltip-map-partner">Quer ser nosso parceiro?</span>
        </div>
        <?php
  }

  
  // Create the admin area widget settings form.
  public function form( $instance ) {
    $title = ! empty( $instance['title'] ) ? $instance['title'] : '';
    $show_title = ! empty( $instance['show_title'] ) ? $instance['show_title'] : ''; ?>
    <p>
      <label for="<?php echo $this->get_field_id( 'title' ); ?>">Title:</label>
      <input type="text" id="<?php echo $this->get_field_id( 'title' ); ?>" name="<?php echo $this->get_field_name( 'title' ); ?>" value="<?php echo esc_attr( $title ); ?>" />
    </p>
     <p>
      <label for="<?php echo $this->get_field_id( 'show_title' ); ?>">Show title?</label>
      <input type="checkbox" id="<?php echo $this->get_field_id( 'show_title' ); ?>" name="<?php echo $this->get_field_name( 'show_title' ); ?>" <?php echo $show_title?> />
    </p><?php
  }


  // Apply settings to the widget instance.
  public function update( $new_instance, $old_instance ) {
    $instance = $old_instance;
    $instance[ 'title' ] = strip_tags( $new_instance[ 'title' ] );
    $instance[ 'show_title' ] = strip_tags( $new_instance[ 'show_title' ] );
    return $instance;
  }

}
// Add custom css file used by widget
function add_Antony_Map_extra_files() {
    wp_enqueue_style('css-antony-map-widget', plugins_url( '', __FILE__ ).'/css/antony-map-widget.css');
    wp_enqueue_script( 'lodash', plugins_url( '', __FILE__ ).'/js/lodash.js');
    wp_enqueue_script( 'locations', plugins_url( '', __FILE__ ).'/js/locations.js');
    wp_enqueue_script( 'js-antony-map-widget', plugins_url( '', __FILE__ ).'/js/antony-map-widget.js', array('jquery', 'lodash', 'locations'));
}
// Register the widget.
function jpen_register_Antony_Map() { 
  register_widget( 'jpen_Antony_Map' );
}
add_action( 'widgets_init', 'jpen_register_Antony_Map' );
add_action('wp_enqueue_scripts', 'add_Antony_Map_extra_files');
?>