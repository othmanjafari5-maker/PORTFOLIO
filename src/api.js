import { supabase } from './supabaseClient'

// Fetch skills from Supabase
export async function fetchSkills() {
  const { data, error } = await supabase
    .from('skills')
    .select('*')
    .order('order', { ascending: true })
  
  if (error) {
    console.error('Supabase error (skills):', error)
    return null
  }
  return data
}

// Fetch projects from Supabase
export async function fetchProjects() {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .order('order', { ascending: true })
  
  if (error) {
    console.error('Supabase error (projects):', error)
    return null
  }
  return data
}

// Add new skill
export async function addSkill(skill) {
  const { data, error } = await supabase
    .from('skills')
    .insert([skill])
    .select()
  
  if (error) throw error
  return data[0]
}

// Update skill
export async function updateSkill(id, updates) {
  const { data, error } = await supabase
    .from('skills')
    .update(updates)
    .eq('id', id)
    .select()
  
  if (error) throw error
  return data[0]
}

// Delete skill
export async function deleteSkill(id) {
  const { error } = await supabase
    .from('skills')
    .delete()
    .eq('id', id)
  
  if (error) throw error
  return true
}

// Add new project
export async function addProject(project) {
  const { data, error } = await supabase
    .from('projects')
    .insert([project])
    .select()
  
  if (error) throw error
  return data[0]
}

// Update project
export async function updateProject(id, updates) {
  const { data, error } = await supabase
    .from('projects')
    .update(updates)
    .eq('id', id)
    .select()
  
  if (error) throw error
  return data[0]
}

// Delete project
export async function deleteProject(id) {
  const { error } = await supabase
    .from('projects')
    .delete()
    .eq('id', id)
  
  if (error) throw error
  return true
}